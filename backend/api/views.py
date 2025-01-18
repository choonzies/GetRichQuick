from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json


import yfinance as yf

# Returns the list of past 5 days closing price of the ticker
def query(ticker):
    # Create a Ticker object
    ticker = yf.Ticker(ticker)

    # Fetch historical market data for the last 30 days
    historical_data = ticker.history(period="5d")
    historical_data = historical_data['Close'] # Closing price only
    
    return historical_data.tolist()


import torch
import numpy as np
import joblib

# Load the scripted model and scaler model
model = torch.jit.load('api/lstm_model/lstm_scripted.pt')
scaler = joblib.load('api/lstm_model/scaler.save')

def make_prediction(list_of_inputs):
    final = list_of_inputs[-1]
    input = np.array(list_of_inputs)
    input_repeated = np.tile(input, (5, 1)) 
    input_tensor = torch.tensor(input_repeated, dtype=torch.float32).unsqueeze(0)
    
    with torch.no_grad():
        predicted = model(input_tensor)
        
    predicted = scaler.inverse_transform(predicted)
    predicted = predicted.tolist()[0]
    
    ret_list = []
    for i in range(1, 8):
        ret_list.append(f'{predicted[i-1] + final}')
    
    return ret_list

@api_view(['POST'])
def handle_input(request):
    try:
        stock_name = request.data.get('stock_name')
        print(stock_name)
        
        if not stock_name:
            return Response({'error': 'Stock name is required'}, status=400)
        
        past_five_data = query(stock_name)
        future = make_prediction(past_five_data)
        return Response(future)
                    
    except Exception as e:
        return Response({'error': str(e)}, status=500)
    