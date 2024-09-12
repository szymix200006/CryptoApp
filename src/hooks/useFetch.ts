import { useEffect, useState } from "react";
import { ErrorType } from "../lib/types";

export default function useFetch(url: string, param="") {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<ErrorType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(null);
    setError(null);
    setIsLoading(true);

    const urlToFetch = param ? url + param : url;

    fetch(urlToFetch)
     .then(res => res.json())
     .then((data) => setData(data))
     .catch((error: ErrorType) => {
      console.log(error)
        setError(error);
      })
     .finally(() => setIsLoading(false))
  }, [url, param]);

  return {data, error, isLoading};
}
