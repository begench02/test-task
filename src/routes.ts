import ConverterPage from './Components/Main/ConverterPage/ConverterPage';
import CurrencyLivePage from './Components/Main/CurrencyLivePage/CurrencyLivePage';
import Error404Page from  './Components/Main/Error404Page/Error404Page';

const CONVERTER_PAGE = '/converter';
const CURRENCY_LIVE_PAGE = '/livecurrency';
const ERROR_404_PAGE = '';

export const Routes = [
    {
        path: CONVERTER_PAGE,
        Component: ConverterPage,
    },
    {
        path: CURRENCY_LIVE_PAGE,
        Component: CurrencyLivePage,
    },
    {
        path: ERROR_404_PAGE,
        Component: Error404Page,
    }
];