

import { getRequest } from '../constants/utils';

export const FETCH_CURRENT_WEATHER = `FETCH_CURRENT_WEATHER`;
export const FETCH_CURRENT_WEATHER_SUCCESS = `FETCH_CURRENT_WEATHER_SUCCESS`;
export const FETCH_CURRENT_WEATHER_FAILURE = `FETCH_CURRENT_WEATHER_FAILURE`;
export const FETCH_FORECAST_WEATHER = `FETCH_FORECAST_WEATHER`;
export const FETCH_FORECAST_WEATHER_SUCCESS = `FETCH_FORECAST_WEATHER_SUCCESS`;
export const FETCH_FORECAST_WEATHER_FAILURE = `FETCH_FORECAST_WEATHER_FAILURE`;

export function fetchCurrentWeather() {
  return {
    type: FETCH_CURRENT_WEATHER
  };
}

export function fetchCurrentWeatherSuccess(payload) {
  return {
    type: FETCH_CURRENT_WEATHER_SUCCESS,
    payload
  };
}

export function fetchCurrentWeatherFailure(payload) {
  return {
    type: FETCH_CURRENT_WEATHER_FAILURE,
    payload
  };
}

export function fetchForecastWeather() {
  return {
    type: FETCH_FORECAST_WEATHER
  };
}

export function fetchForecastWeatherSuccess(payload) {
  return {
    type: FETCH_FORECAST_WEATHER_SUCCESS,
    payload
  };
}

export function fetchForecastWeatherFailure(payload) {
  return {
    type: FETCH_FORECAST_WEATHER_FAILURE,
    payload
  };
}

export function getCurrentWeather() {
  const params = {
    type: 'weather',
    fetchFunc: fetchCurrentWeather,
    fetchSuccessFunc: fetchCurrentWeatherSuccess,
    fetchFailureFunc: fetchCurrentWeatherFailure
  };
  return getRequest(params);
}

export function getForecastWeather() {
  const params = {
    type: 'forecast',
    fetchFunc: fetchForecastWeather,
    fetchSuccessFunc: fetchForecastWeatherSuccess,
    fetchFailureFunc: fetchForecastWeatherFailure
  };
  return getRequest(params);
}
