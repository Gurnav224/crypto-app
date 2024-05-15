import "./App.css";
import BitcoinWallet from "./BitcoinWallet";
import { useEffect, useState } from "react";
import axios from "axios";
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const dayData = [
  { time: '2023-05-15T00:00:00', price: 27500 },
  { time: '2023-05-15T04:00:00', price: 27800 },
  { time: '2023-05-15T08:00:00', price: 28000 },
  { time: '2023-05-15T12:00:00', price: 27700 },
  { time: '2023-05-15T16:00:00', price: 27900 },
  { time: '2023-05-15T20:00:00', price: 28100 },
];

const weekData = [
  { time: '2023-05-09', price: 27000 },
  { time: '2023-05-10', price: 27300 },
  { time: '2023-05-11', price: 27800 },
  { time: '2023-05-12', price: 28100 },
  { time: '2023-05-13', price: 27900 },
  { time: '2023-05-14', price: 27500 },
  { time: '2023-05-15', price: 28000 },
];

const monthData = [
  { time: '2023-05-01', price: 26500 },
  { time: '2023-05-05', price: 27000 },
  { time: '2023-05-10', price: 27800 },
  { time: '2023-05-15', price: 28000 },
  { time: '2023-05-20', price: 27600 },
  { time: '2023-05-25', price: 28300 },
  { time: '2023-05-30', price: 27900 },
];

const yearData = [
  { time: '2023-05-15', price: 28000 },
  { time: '2023-08-15', price: 29500 },
  { time: '2023-11-15', price: 30000 },
  { time: '2024-02-15', price: 31000 },
  { time: '2024-05-15', price: 30500 },
  { time: '2024-08-15', price: 32000 },
  { time: '2024-11-15', price: 31500 },
];

function App() {
  const [livePrice,setLivePrice] = useState(null);
  const [bitcoinData,setBitcoinData] = useState(null)
  const [timeRange, setTimeRange] = useState('day');
  const [rangeData,setRangeData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
        setBitcoinData(response.data);
    }
    fetchData()
    },[]);

useEffect(()=>{

 
  const client = new W3CWebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade')

  client.onopen = ()=>{
    console.log('websocket connected')
  }


  client.onmessage = (message) => {
    const data = JSON.parse(message.data);
    setLivePrice(data.p);
  };

  client.onerror = (error) => {
    console.log(error.message)
  };



  return () => {
    client.close();
  };

 
},[])


const fetchBitcoinData = (timeRange) => {
  switch (timeRange) {
    case 'day':
      return dayData;
    case 'week':
      return weekData;
    case 'month':
      return monthData;
    case 'year':
      return yearData;
    default:
      return [];
  }
};

useEffect(() => {
  const data = fetchBitcoinData(timeRange);
  setRangeData(data)
}, [timeRange]);
console.log(rangeData)
  return (
    <>
     <BitcoinWallet 
       bitcoinData={bitcoinData}
       timeRange={timeRange}
       setTimeRange={setTimeRange}
       rangeData={rangeData}
       livePrice={livePrice}
     />

    </>
  );
}

export default App;
