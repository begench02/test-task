import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrenciesThunk } from '../../../Redux/CurrencyLive/CurrencyLiveReducer';
import { CurrencyLiveGetIsFetching, CurrencyLiveGetCurrencies } from '../../../Redux/CurrencyLive/CurrencyLiveSelector';
import './CurrencyLivePage.css';
import loader from '../../../img/loader.png';
import { Selector } from '../ConverterPage/InputSection/Selector/Selector';

export default function CurrencyLivePage() {
    const dispatch = useDispatch();

    const isFetching: boolean = useSelector(CurrencyLiveGetIsFetching);

    const onSelectorChange = (e: React.FormEvent<HTMLSelectElement>): void => {
        dispatch(addCurrenciesThunk(e.currentTarget.value));
    }

    // currencies = Массив массивов валют
    const currencies: [string, number][] | null = useSelector(CurrencyLiveGetCurrencies);
    return (
        <div>

            <div className='currency_live_selector_block'>
                <Selector onCurrencyChange={onSelectorChange} isFetching={isFetching}/>
                {isFetching ? <img src={loader} alt='loader_image' className='currancy_page_loader_image'/> : null}
            </div>

            <div className='currencies_block'>
                {(currencies == null) ? null : currencies.map((currency: [string, number]) => (
                    <div className='currency_block'>
                        <h2 className='currency_name'>{currency[0].slice(3)}</h2>
                        <p className='currency_value'>{currency[1]}</p>
                    </div>
                    )
                )}
            </div>
            
        </div>
    );
}