type CryptoSocialProps = {
    home: string;
    blockchain: string;
    forum: string
}

export default function CryptoSocial({home, blockchain, forum}: CryptoSocialProps) {
  return (
    <div className="crypto-social-container">
        <div className="crypto-social-item-wrapper">
            <span className="material-symbols-outlined crypto-social-item-image">home</span>
            <a href={home} target="_blank" className="crypto-social-item-text">Homepage</a>
        </div>
        <div className="crypto-social-item-wrapper">
            <span className="material-symbols-outlined crypto-social-item-image">currency_bitcoin</span>
            <a href={blockchain} target="_blank" className="crypto-social-item-text">Blockchain site</a>
        </div>
        <div className="crypto-social-item-wrapper">
            <span className="material-symbols-outlined crypto-social-item-image">forum</span>
            <a href={forum} target="_blank" className="crypto-social-item-text">Official forum</a>
        </div>
    </div>
  )
}
