import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import {ConverterReducer} from './Converter/ConverterReducer';
import ThunkMiddleware, { ThunkAction } from "redux-thunk";
import { CurrencyLiveReducer } from "./CurrencyLive/CurrencyLiveReducer";


const rootReducer = combineReducers({
    converter: ConverterReducer,
    currencyLive: CurrencyLiveReducer
});

// Типизация store
export type AppStateType = ReturnType<typeof rootReducer>;
// Типизация thunk
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
// Типизация Action
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
export const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));