import { AppStateType } from "../Store";

export const ConverterGetConvertedFrom = (state: AppStateType) => {
    return state.converter.from;
}

export const ConverterGetConvertedTo = (state: AppStateType) => {
    return state.converter.to;
}

export const ConverterGetConverterAmount = (state: AppStateType) => {
    return state.converter.currencyAmount;
}

export const ConverterGetConvertedValue = (state: AppStateType) => {
    return state.converter.convertedValue;
}

export const ConverterGetIsFetching = (state: AppStateType) => {
    return state.converter.isFetching;
}