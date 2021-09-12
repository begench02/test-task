import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../../Redux/Store';
import InputSection from './InputSection';

it('Should change input value', () => {
    const {getByTestId} = render(<Provider store={store}><InputSection /></Provider>);
    const input = getByTestId('input');
    fireEvent.change(input, {target: {value: 43}});
    const currencyAmount = store.getState().converter.currencyAmount;
    expect(currencyAmount).toBe(43) 
});
