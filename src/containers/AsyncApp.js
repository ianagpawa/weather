import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import {
  getCurrentWeather,
  getForecastWeather
} from '../actions/weather';

class AsyncApp extends Component {
  constructor(props) { super(props); }

  componentDidMount() {
    const { 
      getCurrentWeather,
      getForecastWeather
    } = this.props;
    getCurrentWeather();
    getForecastWeather();
  }

  componentDidUpdate(prevProps) { 
    console.log('updated')
  }

  render() {
    const { 
      currentWeatherDetails,
      forecastWeatherDetails,
      todayForecastWeatherDetails,
      todayForecastDetails,
      fetchFailure,
      getCurrentWeather,
      getForecastWeather
    } = this.props;
    return (
      <Home 
        fetchFailure={fetchFailure}
        getCurrentWeather={getCurrentWeather}
        getForecastWeather={getForecastWeather}
        currentWeatherDetails={currentWeatherDetails}
        forecastWeatherDetails={forecastWeatherDetails}
        todayForecastWeatherDetails={todayForecastWeatherDetails}
        todayForecastDetails={todayForecastDetails}
      />
    );
  }
}

AsyncApp.propTypes = {
  currentWeatherDetails: PropTypes.object,
  forecastWeatherDetails: PropTypes.array,
  todayForecastWeatherDetails: PropTypes.array,
  todayForecastDetails: PropTypes.array,
  fetchFailure: PropTypes.bool
}

function mapStateToProps(state) {
  const { 
    currentWeatherDetails, 
    forecastWeatherDetails,
    todayForecastWeatherDetails,
    todayForecastDetails,
    getCurrentWeather,
    getForecastWeather,
    fetchFailure
  } = state;
  return { 
    currentWeatherDetails,
    forecastWeatherDetails,
    todayForecastDetails,
    todayForecastWeatherDetails,
    getCurrentWeather,
    getForecastWeather,
    todayForecastDetails,
    fetchFailure
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentWeather,
  getForecastWeather
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncApp)