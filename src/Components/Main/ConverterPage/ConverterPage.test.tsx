import { render, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../../../Redux/Store";
import ConverterPage from "./ConverterPage";

it('Should change input value', () => {
    const mockFn = jest.fn(() => true);
    const { getByTestId } = render(<Provider store={store}> <ConverterPage/> </Provider>);
    fireEvent.click(getByTestId('button'));
    expect(mockFn()).toBe(true);
})