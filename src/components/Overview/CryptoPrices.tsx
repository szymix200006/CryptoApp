type CryptoPricesProps = {
    ath: number,
    atl: number,
    price: number,
    priceChange24: number,
    priceChangeAllTime: number,
}

export default function CryptoPrices({ath, atl, price, priceChange24, priceChangeAllTime}: CryptoPricesProps) {
  return (
    <div className="crypto-prices-container">
        <span className="crypto-prices-item">ATH: {ath}$</span>
        <span className="crypto-prices-item">ATL: {atl}$</span>
        <span className="crypto-prices-item">Price: {price}$</span>
        <span className="crypto-prices-item">
            Change 24h: <span style={{color: priceChange24 > 0 ? 'green' : 'red'}}>{priceChange24}%</span>
        </span>
        <span className="crypto-prices-item">
            Change all time: <span style={{color: priceChangeAllTime > 0 ? 'green' : 'red'}}>{priceChangeAllTime}%</span>
        </span>
    </div>
  )
}
