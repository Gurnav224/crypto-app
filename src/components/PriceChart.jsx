import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// eslint-disable-next-line react/prop-types
const PriceChart = ({ timeRange, rangeData}) => {
  // Assuming the data structure is an array of objects with `time` and `price` properties

  return (
    <div className="price-chart">
      <h3>Bitcoin Price ({timeRange})</h3>
      <LineChart width={600} height={300} data={rangeData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis dataKey="price" />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default PriceChart;