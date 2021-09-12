import {getCurrencyValues} from "../../Api/api";
import { BaseThunkType, InferActionsTypes } from "../Store";

export const CurrencyLiveInitialState = {
    baseCurrencyName: '',
    currencies: null as [string, number][] | null,
    isFetching: false
};


export const CurrencyLiveActions = {
    baseCurrencyChange: (currencyName: string) => ({type: 'BASE-CURRENCY-CHANGE', currencyName} as const),
    addCurrencies: (currency: [string, number][]) => ({type: 'ADD-CURRENCIES', currency} as const),
    changeFetching: () => ({type: 'CHANGE-FETCHING'} as const)
};

export const CurrencyLiveReducer = (state = CurrencyLiveInitialState, actions: CurrencyLiveActionsType): CurrencyLiveInitialStateType => {
    switch (actions.type) {
        case 'BASE-CURRENCY-CHANGE':
            return {
                ...state,
                baseCurrencyName: actions.currencyName
            }
        case 'ADD-CURRENCIES':
            return {
                ...state,
                currencies: actions.currency
            }
        case 'CHANGE-FETCHING':
            return {
                ...state,
                isFetching: !state.isFetching
            }

        default:
            return state;
    };
};

export const addCurrenciesThunk = (baseCurrency: string): ThunkType => {
    return async (dispatch: any) => {
        dispatch(CurrencyLiveActions.changeFetching());
        dispatch(CurrencyLiveActions.baseCurrencyChange(baseCurrency));
        const currencies: {[key: string]: number} = await getCurrencyValues();
        for (let currency in currencies) { 
            if (currency === baseCurrency) continue;
            // Вычисляется новое значение относительно базовой валюты
            currencies[currency] = Number((currencies[currency] / currencies[baseCurrency]).toFixed(5));
        }
        let currenciesArr: [string, number][] = await (Object.entries(currencies));
        
        await dispatch(CurrencyLiveActions.addCurrencies(currenciesArr));
        await dispatch(CurrencyLiveActions.changeFetching());
    }
}

// Тип store-а
export type CurrencyLiveInitialStateType = typeof CurrencyLiveInitialState;
// Тип для action-ов
type CurrencyLiveActionsType = InferActionsTypes<typeof CurrencyLiveActions>;
// Тип для thunk-ов
type ThunkType = BaseThunkType<CurrencyLiveActionsType>;