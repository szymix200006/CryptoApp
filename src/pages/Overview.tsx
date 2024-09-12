import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { API_CHART, API_OVERVIEW } from "../lib/constants";
import CryptoHeader from "../components/Overview/CryptoHeader";
import CryptoSocial from "../components/Overview/CryptoSocial";
import CryptoPrices from "../components/Overview/CryptoPrices";
import CryptoChart from "../components/Overview/CryptoChart";
import Loading from "../components/UtilComponents/Loading";
import ErrorPage from "./ErrorPage";

export default function Overview() {
  const {c_id} = useParams();
  const overviewResponse = useFetch(API_OVERVIEW, c_id);
  const chartResponse = useFetch(API_CHART(c_id as string));

  return (
    <div className="overview-container">
      {overviewResponse.error ? <ErrorPage error={overviewResponse.error}/> :
        chartResponse.error ? <ErrorPage error={chartResponse.error}/> :
          overviewResponse.isLoading || chartResponse.isLoading ? <Loading/> : 
          <>
            <div className="overview-crypto-social-info">
              <CryptoHeader 
                image={overviewResponse.data?.image?.large} 
                name={overviewResponse.data?.name} 
                symbol={overviewResponse.data?.symbol} />
              <CryptoSocial 
                home={overviewResponse.data?.links?.homepage[0]} 
                blockchain={overviewResponse.data?.links?.blockchain_site[0]} 
                forum={overviewResponse.data?.links?.official_forum_url[0]}/>
            </div>
            <div className="overview-crypto-prices-info">
              <CryptoPrices 
                ath={overviewResponse.data?.market_data?.ath?.usd} 
                atl={overviewResponse.data?.market_data?.atl?.usd} 
                price={overviewResponse.data?.market_data?.current_price?.usd} 
                priceChange24={overviewResponse.data?.market_data?.price_change_percentage_24h} 
                priceChangeAllTime={overviewResponse.data?.market_data?.price_change_percentage_1y}/>
              <CryptoChart 
                prices={chartResponse.data?.prices.map((price: number[]) => price[1])} 
                days={chartResponse.data?.prices.map((price: number[]) => {
                  const rawDate = new Date(price[0]);
                  const formatedDate = (rawDate.getDate() + 1) + "." + (rawDate.getMonth() + 1);
                  return formatedDate
                }
                )}/>
            </div>
          </>
      }
    </div>
  )
}
