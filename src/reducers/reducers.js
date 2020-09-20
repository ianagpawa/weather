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
    case FETCH_FORECAST_WEATHER_SUCCESS:
      return [
        ...state,
        ...action.payload.list
      ];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  currentWeatherDetails,
  forecastWeatherDetails
});

export default rootReducer;
