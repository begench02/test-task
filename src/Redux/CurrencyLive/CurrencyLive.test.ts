import { CurrencyLiveActions, CurrencyLiveInitialStateType, CurrencyLiveReducer } from './CurrencyLiveReducer';

let state: CurrencyLiveInitialStateType;
beforeEach(() => {
    state = {
        baseCurrencyName: '',
        currencies: null as [string, number][] | null,
        isFetching: false
    }
});

test('Change base currency name', () => {
    const newState = CurrencyLiveReducer(state, CurrencyLiveActions.baseCurrencyChange('USD'));
    expect(newState.baseCurrencyName).toBe('USDUSD');
});

test('Add currencies', () => {
    const currency: [string, number][] = [['USD', 45], ['RUB', 45]];
    const newState = CurrencyLiveReducer(state, CurrencyLiveActions.addCurrencies(currency));
    expect(newState.currencies).toBe(currency);
});

test('Change fetching', () => {
    const newState = CurrencyLiveReducer(state, CurrencyLiveActions.changeFetching());
    expect(newState.isFetching).toBe(true);
});