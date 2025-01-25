# getRichQuick
A web app that crawls the web for stock information, then predicts the price movement using an LSTM model in neural networks. 

**By entering the ticker of a stock, you will be able to extract the closing price from the previous 5 days.**
![home page](Assets/combined.png)

**LSTM model will make predictions on the future prices (up to 7 days) based on the extracted data.**


## Features 🔥🔥

- **Stock Price Prediction**: Predict future stock prices based on historical data using an LSTM model.
- **Interactive Frontend**: User-friendly interface built with React.
- **Robust Backend**: Django backend for processing predictions and serving results.
- **Real-Time Data**: Fetches historical stock data using the `yfinance` library.

## Tech Stack ⛏️

- **Frontend**: React
- **Backend**: Django
- **Machine Learning**: PyTorch
- **Data Source**: Yahoo Finance (`yfinance` library)

## Notebook for LSTM Model
![Static Badge](https://img.shields.io/badge/Link-red?style=for-the-badge&label=link&link=https%3A%2F%2Fgithub.com%2Flifrocszh%2FgetRichQuick%2Fblob%2Fmain%2FModel%2520Training%2Factual_model.ipynb)
---

## Installation

- Ensure that you meet the following prerequisites:
  - Python 3.12.8
  - Node.js 22.12.0

1) Clone the Repository
```bash
git clone https://github.com/lifrocszh/getRichQuick.git
```
2) `cd` into the first backend folder, then run `python -m venv venv; ./venv/Scripts/activate; pip install -r requirements.txt;` to create a virual environment and install python dependencies.
3) Run  `python manage.py runserver 9000` to start the backend server. (Important: Set 9000 as the port number)
4) `cd` into the frontend folder, then run `npm i; npm start;`
5) Wait for both browser windows to open, then access the window with the UI.
6) Key in any ticker from Yahoo! finance, and watch the price predictions!

## License
![GitHub License](https://img.shields.io/github/license/lifrocszh/getRichQuick)

## Acknowledgments

- **[PyTorch](https://pytorch.org/)**: Choice of machine learning framework, enabling the development of the LSTM model used in this project.
- **[Yahoo Finance](https://finance.yahoo.com/)**: For real-time stock market data and APIs via the `yfinance` library.
- **[React](https://reactjs.org/)**: Interactive frontend framework for the web app.
- **[Django](https://www.djangoproject.com/)**: Framework for backend API.

## Other Contributors
**[Wang Ziheng](https://github.com/lifrocszh)**


