type CryptoHeaderProps = {
    image: string,
    name: string,
    symbol: string
}

export default function CryptoHeader({image, name, symbol}: CryptoHeaderProps) {
  return (
    <div className="crypto-header-container">
      <img src={image} alt="crypto_image" className="crypto-header-image"/>
      <h1 className="crypto-header-name">{name}</h1>
      <span className="crypto-header-id">{symbol}</span>
    </div>
  )
}
