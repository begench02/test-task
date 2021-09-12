import { BaseThunkType, InferActionsTypes } from "../Store";
import { getCurrencyValues} from '../../Api/api';

export const ConverterInitialState = {
    from: '',
    to: '',
    isFetching: false,
    currencyAmount: 0,
    convertedValue: 0,
};

export const ConverterActions = {
    currencyAmountChange: (amount: number) => ({type: 'CURRENCY-AMOUNT-CHANGE', amount} as const),
    fromCurrencyChange: (fromCurrency: string) => ({type: 'FROM-CURRENCY-CHANGE', fromCurrency} as const),
    toCurrencyChange: (toCurrency: string) => ({type: 'TO-CURRENCY-CHANGE', toCurrency} as const),
    convertedValueChange: (convertedValue: number) => ({type: 'CONVERTED-VALUE-CHANGE', convertedValue} as const),
    changeFetching: () => ({type: 'CHANGE-FETCHING'} as const)
};

export const ConverterReducer = (state = ConverterInitialState, actions: ActionsType): ConverterInitialStateType => {
    switch (actions.type) {
        case 'CURRENCY-AMOUNT-CHANGE':
            return {
                ...state,
                currencyAmount: actions.amount
            }
        case 'FROM-CURRENCY-CHANGE':
            return {
                ...state,
                from: actions.fromCurrency
            }
        case 'TO-CURRENCY-CHANGE':
            return {
                ...state,
                to: actions.toCurrency
            }
        case 'CONVERTED-VALUE-CHANGE':
                return {
                    ...state,
                    convertedValue: actions.convertedValue
                }
        case 'CHANGE-FETCHING':
            return {
                ...state,
                isFetching: !state.isFetching
            }
        default:
            return state;
    }   
};

export const convertCurrency = (from: string, to: string, amount: number): ThunkType => {
    // Если какой-то из select-ов не выбран, то выводится alert
    if (!(from && to)) {
        alert('Выберите валюты'); 
        return () => new Promise(() => {});
    }
    return async (dispatch) => {
        // Показываю картинку loader-а перед запросом
        dispatch(ConverterActions.changeFetching());
        // Делаю запрос к серверу и получаю в ответе значение типа {назвение валюты: курс к доллару, ...}
        const data: currenciesValueApiDataType = await getCurrencyValues();
        // Расситываю значение и dispatch-у
        let convertedCurrency: number = Number((amount / data[from] * data[to]).toFixed(5));
        dispatch(ConverterActions.convertedValueChange(convertedCurrency));
        // Скрываю loader
        dispatch(ConverterActions.changeFetching());
    } 
}

// Тип store-а
export type ConverterInitialStateType = typeof ConverterInitialState;
// Тип для action-ов
type ActionsType = InferActionsTypes<typeof ConverterActions>;
// Тип данных получаемых из API
export type currenciesValueApiDataType = {
    [key: string]: number;
}
// Тип для thunk-ов
type ThunkType = BaseThunkType<ActionsType>;