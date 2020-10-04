import { combineReducers } from 'redux'
import {
  FETCH_CURRENT_WEATHER_FAILURE,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_FORECAST_WEATHER_FAILURE,
  FETCH_FORECAST_WEATHER_SUCCESS
} from '../actions/weather';

function currentWeatherDetails(state = {}, action) {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER_SUCCESS:
      return { 
        ...action.payload 
      };
    default:
      return state;
  }
}

function forecastWeatherDetails(state = [], action) {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER_SUCCESS:
      return [
        action.payload,
      ];
    case FETCH_FORECAST_WEATHER_SUCCESS:
      return [
        ...(action && action.payload && action.payload.list).filter(weather => {
            return weather['dt_txt'].indexOf('12:00:00') > -1;
        })
      ];
    default:
      return state;
  }
}

function todayForecastWeatherDetails(state = [], action) {
  switch (action.type) {
    case FETCH_FORECAST_WEATHER_SUCCESS:
      return [
        ...action.payload.list.slice(0,6)
      ]
    default:
      return state;
  }
}

function todayForecastDetails(state = [], action) {
  switch (action.type) {
    case FETCH_FORECAST_WEATHER_SUCCESS:
      return action.payload.list.slice(0,1);
    default: 
      return state;
  }
}

function fetchFailure(state = false, action) {
  switch (action.type) {
    case FETCH_FORECAST_WEATHER_FAILURE:
    case FETCH_CURRENT_WEATHER_FAILURE:
      return true;
    case FETCH_CURRENT_WEATHER_SUCCESS:
    case FETCH_FORECAST_WEATHER_SUCCESS:
      return false;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  currentWeatherDetails,
  forecastWeatherDetails,
  todayForecastWeatherDetails,
  todayForecastDetails,
  fetchFailure
});

export default rootReducer;
