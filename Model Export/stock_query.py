import yfinance as yf

# Define the ticker symbol
stock = "MSFT"

# Returns the list of past 5 days closing price of the ticker
def query(ticker):
    # Create a Ticker object
    ticker = yf.Ticker(ticker)

    # Fetch historical market data for the last 30 days
    historical_data = ticker.history(period="5d")
    historical_data = round(historical_data['Close'], 2) # Closing price only
    
    return historical_data.tolist()

print(query(stock))

# # Display a summary of the fetched data
# print(f"Summary of Historical Data for {ticker_symbol}:")
# print(historical_data[['Open',  'Close']])