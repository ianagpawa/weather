import { combineReducers } from 'redux'
import {
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_FORECAST_WEATHER_SUCCESS,
} from '../actions/weather';

function currentWeatherDetails(state = {}, action) {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER_SUCCESS:
      return { 
        ...state, 
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
        ...state,
      ];
    case FETCH_FORECAST_WEATHER_SUCCESS:
      return [
        ...state,
        ...action.payload.list.filter(weather => {
          // get weather at noon of each day.
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
        ...state,
        ...action.payload.list.slice(0,6)
      ]
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  currentWeatherDetails,
  forecastWeatherDetails,
  todayForecastWeatherDetails
});

export default rootReducer;
