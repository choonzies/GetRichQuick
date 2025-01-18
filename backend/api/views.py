from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

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

input = [104581.0, 101217.0, 99589.9, 97183.0, 94984.1]
# print(make_prediction(input))
    
@api_view(['GET'])
def get_predictions(request):
    return Response(make_prediction(input))
