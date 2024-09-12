import { useId, useReducer } from "react";
import CryptoCarousel from "../components/CryptoCarousel/CryptoCarousel";
import CryptoList from "../components/CryptoList/CryptoList";
import useFetch from "../hooks/useFetch";
import { API_ALL, API_TRENDING, PAGE_REDUCER } from "../lib/constants";
import { Actions } from "../lib/types";
import Loading from "../components/UtilComponents/Loading";
import ErrorPage from "./ErrorPage";

function reducer(page: number, action: Actions): number{
  switch(action.type) {
    case PAGE_REDUCER.NEXT: return page + 1; 
    case PAGE_REDUCER.PREVIOUS: return page - 1; 
    default: return page;
  }
}

export default function Home() {
  const id = useId();
  const [page, dispatch] = useReducer(reducer, 1);
  const responseTrending = useFetch(API_TRENDING);
  const responseAll = useFetch(API_ALL, page.toString());

  return (
    <div className="home-page">
      {responseAll.error ? <ErrorPage error={responseAll.error}/> : 
        responseTrending.error ? <ErrorPage error={responseTrending.error}/> : 
          responseAll.isLoading || responseTrending.isLoading ? <Loading/> : 
            <>      
              <CryptoCarousel cryptos={responseTrending} id={id}/>
              <CryptoList cryptos={responseAll} page={page} setPage={dispatch} id={id}/>
            </>
      }
    </div>
  )
}
