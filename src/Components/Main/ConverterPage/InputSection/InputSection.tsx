import React from 'react';
import { useDispatch } from 'react-redux';
import { ConverterActions } from '../../../../Redux/Converter/ConverterReducer';
import './InputSection.css';
import {Selector} from './Selector/Selector';

export default function InputSection() {
    const dispatch = useDispatch();
    
    const onCurrencyAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(ConverterActions.currencyAmountChange(Number(e.target.value)));
    };

    const onFromCurrencyChange = (e: React.FormEvent<HTMLSelectElement>): void => {
        dispatch(ConverterActions.fromCurrencyChange(e.currentTarget.value));
    };

    const onToCurrencyChange = (e: React.FormEvent<HTMLSelectElement>): void => {
        dispatch(ConverterActions.toCurrencyChange(e.currentTarget.value));
    };

    return (
        <>
            <label htmlFor='initialValue' className='label'> Введите сумму: <br/> </label>
            <input type='number' id='initialValue' data-testid='input' onChange={onCurrencyAmountChange} className='input'/>
            <div className='select_block'>
                <p>Выберите валюту для конвертации</p>
                <span>Из </span>
                <Selector onCurrencyChange={onFromCurrencyChange}/>
                <span> в </span>
                <Selector onCurrencyChange={onToCurrencyChange}/>
            </div>
        </>
    );
}