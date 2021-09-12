import React from 'react';
import './Selector.css';

type PropsType = {
    onCurrencyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    isFetching?: boolean;
}

export const Selector = (props: PropsType) => {
    return (
        <select name="select" data-testid='selector' onChange={props.onCurrencyChange} className='select' disabled={props.isFetching ? true : false}>
            <option disabled selected>Select</option>
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="UZS">UZS</option>
            <option value="TMT">TMT</option>
        </select>
    );
}