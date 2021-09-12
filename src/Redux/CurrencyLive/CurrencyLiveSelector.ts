import { AppStateType } from "../Store";

export const CurrencyLiveGetCurrencies = (state: AppStateType) => {
    return state.currencyLive.currencies;
};

export const CurrencyLiveGetIsFetching = (state: AppStateType) => {
    return state.currencyLive.isFetching;
};

export const CurrencyLiveGetBaseCurrencyName = (state: AppStateType) => {
    return state.currencyLive.baseCurrencyName;
};