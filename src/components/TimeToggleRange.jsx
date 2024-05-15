/* eslint-disable react/prop-types */


const TimeRangeToggle = ({ timeRange, setTimeRange }) => {
  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };

  console.log(timeRange)

  return (
    <div className="time-range-toggle">
      <button onClick={() => handleTimeRangeChange('day')}>Day</button>
      <button onClick={() => handleTimeRangeChange('week')}>Week</button>
      <button onClick={() => handleTimeRangeChange('month')}>Month</button>
      <button onClick={() => handleTimeRangeChange('year')}>Year</button>
    </div>
  );
};

export default TimeRangeToggle;