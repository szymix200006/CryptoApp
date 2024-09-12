import { useRef } from 'react';
import CryptoListCard from './CryptoListCard';
import { Action, Actions, Cryptos } from '../../lib/types';
import { PAGE_REDUCER } from '../../lib/constants';

type CryptoListProps = {
    cryptos: Cryptos,
    page: number,
    setPage: React.Dispatch<Actions>;
    id: string;
}

export default function CryptoList({ cryptos, page, setPage, id }: CryptoListProps) {
  const headerRef = useRef<HTMLHeadingElement>(null);

  const navigationChange = (type: Action) => {
    setPage({type: type});
    if(headerRef.current) headerRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className='crypto-list-container'>
      <h1 ref={headerRef} className='crypto-list-header'>All cryptos</h1>
      <div className="crypto-list-desc">
        <span>MARKET CAP</span>
        <span>NAME</span>
        <span>24H CHANGE</span>
        <span>PRICE</span>
      </div>
      <div className="crypto-list-wrapper">
        {cryptos?.data?.map((coin: any) => {
          return <CryptoListCard key={`${id}-list`} crypto={coin}/>
        })}
      </div>
      <div className='crypto-list-navigation-wrapper'>
        <button className="crypto-list-navigation-button" onClick={() => navigationChange(PAGE_REDUCER.PREVIOUS)} disabled={page <= 1 ? true : false}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button className="crypto-list-navigation-button" onClick={() => navigationChange(PAGE_REDUCER.NEXT)}>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
