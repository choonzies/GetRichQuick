import './Theme.css';
import Button from '../components/Button.js'
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import axios from 'axios';
import icon from '../assets/icon.png';


function Home() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:9000/api/handle-input/', {
        stock_name: inputValue
      });
      console.log('Response:', response.data);
      const past_prices = response.data.past_prices;
      const future_prices = response.data.future_prices;
      navigate('/main', { state: { 'past_prices': past_prices, 'future_prices': future_prices, 'stock': inputValue.toUpperCase() } }); // Navigate after successful response
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Default">
      <header className="App-header">
        <img src={icon} alt="GetRichQuick" style={{ width: '220px', height: 'auto' }}/>
        <h2>100% reliable money generator!!</h2>
        <p>
          Here's your chance to be a billionaire!
        </p>
        <input
          type="text"
          className="App-input"
          placeholder="BTC-USD"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button text="Get Started $" onClick={handleSubmit} />
      </header>
    </div>
  );
}

export default Home;
