import './Theme.css';
import Table from '../components/Table.js'
import { useLocation } from 'react-router-dom';

function Main() {
  const past_columns = ["D-5", "D-4", "D-3", "D-2", "D-1"];
  const future_columns = ["D+1", "D+2", "D+3", "D+4", "D+5", "D+6", "D+7"]; // 7 integers for columns
  // const data = [
  //   [110000, 120000, 130000, 140000, 150000, 160000, 170000], // Each row has 7 integers
  // ];
  const location = useLocation();  // Access location data
  const { past_prices } = location.state || {};
  const old_data = past_prices ? past_prices : [0, 0, 0, 0, 0];
  const { future_prices } = location.state || {};
  const new_data = future_prices ? future_prices : [0, 0, 0, 0, 0, 0, 0];
  const { stock } = location.state || "";
  const stock_name = stock ? stock : "EMPTY";

  return (
    <div className="Default">
      <header className="App-header">
        <h1>OUR FINDINGS</h1>
        <h3>Stock name: <span style={{ color: 'red' }}>{stock_name}</span></h3>
        <p>Taking the closing prices from the past <span style={{fontWeight: 'bold' }}>5 days...</span></p>
        <div>
          <Table columns={past_columns} data={old_data} />
        </div>
        <div className='Spacing'></div>
        <p>Our model predicted these prices for the next <span style={{fontWeight: 'bold' }}>7 days!</span></p>
        <div className="Default">
          <Table columns={future_columns} data={new_data} />
        </div>
      </header>
    </div>
  );
}

export default Main;
