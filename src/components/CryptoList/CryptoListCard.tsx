import { NavLink } from "react-router-dom";

type CryptoListCardProps = {
    crypto: any;
}

export default function CryptoListCard({crypto} : CryptoListCardProps) {
  const {
    market_cap_rank, 
    image, 
    name, 
    symbol, 
    price_change_percentage_24h, 
    current_price, 
    id
  } = crypto;

  return (
    <NavLink to={"overview/" + id} className='crypto-list-card-container-wrapper'>
      <div className='crypto-list-card-container'>
        <span className="crypto-list-card-position">{market_cap_rank}.</span>
        <div className="crypto-list-card-header">
          <img src={image} alt="crytpo_image" className='crypto-list-card-image'/>
          <div className="crypto-list-card-text">
            <span className='crypto-list-card-name'>{name}</span>
            <span className='crypto-list-card-name-short'>{symbol}</span>
          </div>
        </div>
        <span className="crypto-list-card-price-change" style={{color: price_change_percentage_24h > 0 ? "green" : "red"}}>{price_change_percentage_24h}%</span>
        <span className='crypto-list-card-price'>{current_price.toFixed(5)}$</span>
      </div>
    </NavLink>
  )
}
