import { NavLink } from "react-router-dom";

type CryptoCarouselCardProps = {
    crypto: any;
}

export default function CryptoCarouselCard({crypto}: CryptoCarouselCardProps) {
  const {
    name,
    data,
    large,
    id
  } = crypto;

  return (
    <div className="crypto-carousel-card-container">
        <NavLink to={"overview/" + id}>
          <img src={large} alt="crypto-logo" className="crypto-carousel-card-picture"/>
        </NavLink>
      <h3 className="crypto-carousel-card-header">{name}</h3>
      <span className="crypto-carousel-card-info">{data.price.toFixed(5)} $</span>
    </div>
  )
}
