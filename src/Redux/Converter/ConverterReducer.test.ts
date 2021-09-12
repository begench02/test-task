import { ConverterInitialStateType, ConverterReducer, ConverterActions } from './ConverterReducer';

let state: ConverterInitialStateType;

beforeEach(() => {
    state = {
        from: '',
        to: '',
        isFetching: false,
        currencyAmount: 0,
        convertedValue: 0,
    }
});
test('Change from currency', () => {
    const newState = ConverterReducer(state, ConverterActions.fromCurrencyChange('RUB'));
    expect(newState.from).toBe('RUB');
});

test('Change to currency', () => {
    const newState = ConverterReducer(state, ConverterActions.toCurrencyChange('RUB'));
    expect(newState.to).toBe('RUB');
});

test('Change fetching', () => {
    const newState = ConverterReducer(state, ConverterActions.changeFetching());
    expect(newState.isFetching).toBe(true);
});

test('Change currency amount', () => {
    const newState = ConverterReducer(state, ConverterActions.currencyAmountChange(32));
    expect(newState.currencyAmount).toBe(32);
});

test('Change converted value', () => {
    const newState = ConverterReducer(state, ConverterActions.convertedValueChange(784));
    expect(newState.convertedValue).toBe(784);
});