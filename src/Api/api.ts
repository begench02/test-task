import axios from "axios";
import { currenciesValueApiDataType } from "../Redux/Converter/ConverterReducer";

const key = '9C9riqjOGgDpnzdS17KD5oTLTxkxGVm97xIm';
const URL = `https://currencyapi.net/api/v1/rates?key=${key}&output=JSON`;

export const getCurrencyValues = (): Promise<currenciesValueApiDataType> => {
    // Отправляем запрос на https://currencyapi.net
    return axios.get(URL)
    .then((res: any) => {
        console.log(res);
        
        // Если ответ не придёт(бывает, если быстро отправить несколько запросов), запрос отправляется заново
        if (res.data.rates !== undefined) return res.data.rates;
        if (res.data.rates === undefined) {
            axios.get(URL)
                .then((res: any): currenciesValueApiDataType => res.data.rates);
        }
    });
    
};
    