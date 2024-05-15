/* eslint-disable react/prop-types */
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SiBitcoinsv } from "react-icons/si";

const WalletBalance = ({bitcoinData, livePrice}) => {
  console.log(bitcoinData?.market_data.price_change_percentage_24h)

  return (
    <div className="bitcoin">
      <div className="bitcoin_header">
      <div className="bitcoin_name_icon">
      <SiBitcoinsv color="yellow" size={50}/>
        <h3>Bitcoin</h3>
      </div>
      <p>BTC</p>
      </div>
      <h2 className="value">{livePrice} BTC</h2>
      <div className="evaluation">
        <div className="amount">
        {bitcoinData?.market_data.current_price.usd}  USD

        </div>
        <div className={`percentage ${bitcoinData?.market_data.ath_change_percentage.usd<0 ? 'negative':'positive'}`}>
         {bitcoinData?.market_data.ath_change_percentage.usd}  %
        </div>

      </div>
      <MdOutlineKeyboardArrowDown  color="grey" fontSize={60}/>
    </div>

  )
}

export default WalletBalance
