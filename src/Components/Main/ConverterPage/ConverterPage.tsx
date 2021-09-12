import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertCurrency } from '../../../Redux/Converter/ConverterReducer';
import { ConverterGetConvertedFrom, ConverterGetConvertedTo, ConverterGetConvertedValue, ConverterGetConverterAmount, ConverterGetIsFetching } from '../../../Redux/Converter/ConverterSelector';
import './ConverterPage.css';
import loader from '../../../img/loader.png';
import InputSection from './InputSection/InputSection';

export default function ConverterPage() {
    const dispatch = useDispatch();
    // Получаю конвертиравонное значение
    const convertedValue = useSelector(ConverterGetConvertedValue);
    // Получаю булеан значение для loader-а
    const isFetching = useSelector(ConverterGetIsFetching);
    // Получаю значение валюты(с какой)
    const from = useSelector(ConverterGetConvertedFrom);
    // Получаю значение валюты(на какую) 
    const to = useSelector(ConverterGetConvertedTo);
    // Получаю каличество валют
    const amount = useSelector(ConverterGetConverterAmount);

    // Отправляю значения для конверации
    const onConvertButtonClick = () => {
        dispatch(convertCurrency(from, to, amount));
    }

    return(
        <div className='main_block'>

            <div className='input_section'>
                <InputSection />
            </div>

            <div className='convert_button_section'>
                <button className='convert_button_section_button' data-testid='button' onClick={onConvertButtonClick}>Convert</button>
                {isFetching ? <img src={loader} alt='Loader' className='convert_button_section_loader_image'/> : null}
            </div>

            <div className='convertion_result_section'>
                <h2 className='convertion_result_section_text'>Ваш результат: </h2>
                <p className='convertion_result_section_text'>{convertedValue}</p>
            </div>

        </div>
    );
}