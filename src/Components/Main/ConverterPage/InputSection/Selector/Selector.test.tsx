import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../../Redux/Store";
import CurrencyLivePage from "../../../CurrencyLivePage/CurrencyLivePage";

it('Should change select', () => {
    const {getByTestId} = render(<Provider store={store}> <CurrencyLivePage /> </Provider>);
    fireEvent.change(getByTestId('selector'), { target: { value: 'TMT' } });
    let baseCurrencyName = store.getState().currencyLive.baseCurrencyName;
    expect(baseCurrencyName).toBe('USDTMT');
})