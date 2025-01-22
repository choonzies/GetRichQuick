import yfinance as yf

stock = "MSFT"

def query(ticker):
    ticker = yf.Ticker(ticker)

    historical_data = ticker.history(period="5d")
    historical_data = round(historical_data['Close'], 2) # Closing price only
    
    return historical_data.tolist()

print(query(stock))

# # Display a summary of the fetched data
# print(f"Summary of Historical Data for {ticker_symbol}:")
# print(historical_data[['Open',  'Close']])