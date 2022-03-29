import {UI_ELEMENTS, showWeather, /*showForecast, addFavoriteCity*/} from "./view.js";

window.addEventListener('unhandledrejection', function(event) {
    alert(event.promise);
    alert(event.reason);
});
UI_ELEMENTS.FORM_SEARCH.addEventListener('submit', function(event){ showWeather(event); });
//UI_ELEMENTS.HEART_BTN.addEventListener('click', addFavoriteCity);

const PROTOCOL = 'https';
const HOST = 'openweathermap.org';
const URL_WEATHER = `${PROTOCOL}://api.${HOST}/data/2.5/weather`;
const URL_FORCAST = `${PROTOCOL}://api.${HOST}/data/2.5/forecast`;
export const URL_ICONS = `${PROTOCOL}://${HOST}/img/wn/`;
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
const UNITS = 'units=metric';
const FORECAST_PERIOD = 'cnt=7';
export const ERROR = 'error';

//export const favoriteCities = [];

export function getWeather() {
    const cityName = UI_ELEMENTS.INPUT_SEARCH.value;
    const LANG = `lang=${UI_ELEMENTS.HTML.getAttribute('lang')}`;
    const uri = `${URL_WEATHER}?q=${cityName}&appid=${API_KEY}&${UNITS}&${LANG}`;

    return fetch(uri)
        .then(response => {
            const statusCode = response.status;
            if (statusCode === 404) {
                throw new SyntaxError(response.statusText);
            } else if (statusCode < 200 || statusCode > 299) {
                throw new Error(response.statusText);
            }

            return response.json();
        })
        .catch(error => {
            if (error instanceof SyntaxError) {
                alert(`1 ${error.constructor.name}: ${error.message}`);
            }

            throw error;
        });
}
