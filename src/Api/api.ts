import axios from "axios";
import { currenciesValueApiDataType } from "../Redux/Converter/ConverterReducer";

const key = 'cddb8481e986d4efaae63a54f20e1145';
const URL = `http://api.currencylayer.com/live?access_key=${key}`;

export const getCurrencyValues = (): Promise<currenciesValueApiDataType> => {
    // Отправляем запрос на http://api.currencylayer.com
    return axios.get(URL)
    .then((res: any) => {
        // Если ответ не придёт(бывает, если быстро отправить несколько запросов), запрос отправляется заново
        if (res.data.quotes != undefined) return res.data.quotes;
        if (res.data.quotes == undefined) {
            axios.get(URL)
                .then((res: any): currenciesValueApiDataType => res.data.quotes);
        }
    });
    
};
    