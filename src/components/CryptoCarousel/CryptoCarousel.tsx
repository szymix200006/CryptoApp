import CryptoCarouselCard from "./CryptoCarouselCard"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Cryptos } from "../../lib/types";

type CryptoCarouselProps = {
    cryptos: Cryptos;
    id: string;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

export default function CryptoCarousel({cryptos, id}: CryptoCarouselProps) {
    
  return (
    <div className="crypto-carousel-container">
      <h1 className="crypto-carousel-header">Trending now</h1>
      <Carousel responsive={responsive} showDots={false} infinite autoPlay removeArrowOnDeviceType={["desktop", "tablet", "mobile"]} containerClass="carousel-wrapper">
        {cryptos?.data?.coins?.map((crypto: any) => {
          return <CryptoCarouselCard key={`${id}-carousel`} crypto={crypto.item}/>
        })} 
      </Carousel>
    </div>
  )
}
