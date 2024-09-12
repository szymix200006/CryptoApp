import { Action } from "./types";

export const API_TRENDING = "https://api.coingecko.com/api/v3/search/trending";
export const API_ALL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=";
export const API_OVERVIEW = "https://api.coingecko.com/api/v3/coins/";
export const API_CHART = (id: string): string => `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`;

type PageReducer = {
    NEXT: Action,
    PREVIOUS: Action
}

export const PAGE_REDUCER: PageReducer = {
    NEXT: 'next',
    PREVIOUS: 'previous'
}
