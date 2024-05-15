/* eslint-disable react/prop-types */
import Header from "./components/Header"
import PriceChart from "./components/PriceChart"
import TimeRangeToggle from "./components/TimeToggleRange"
import WalletBalance from "./components/WalletBalance"


const BitcoinWallet = ({bitcoinData , timeRange,setTimeRange,rangeData,livePrice}) => {

  return (
    <div>
    <Header/>
      <WalletBalance   bitcoinData={bitcoinData} livePrice={livePrice}/>
      <TimeRangeToggle  timeRange={timeRange} setTimeRange={setTimeRange}/>
      <PriceChart timeRange={timeRange} rangeData={rangeData}/>
    </div>
  )
}

export default BitcoinWallet
