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

  componentDidUpdate(prevProps) { }

  render() {
    const { 
      currentWeatherDetails,
      forecastWeatherDetails,
      todayForecastWeatherDetails
    } = this.props;
    return (
      <Home 
        currentWeatherDetails={currentWeatherDetails}
        forecastWeatherDetails={forecastWeatherDetails}
        todayForecastWeatherDetails={todayForecastWeatherDetails} 
      />
    );
  }
}

AsyncApp.propTypes = {
  currentWeatherDetails: PropTypes.object,
  forecastWeatherDetails: PropTypes.array,
  todayForecastWeatherDetails: PropTypes.array
}

function mapStateToProps(state) {
  const { 
    currentWeatherDetails, 
    forecastWeatherDetails,
    todayForecastWeatherDetails
  } = state;
  return { 
    currentWeatherDetails,
    forecastWeatherDetails,
    todayForecastWeatherDetails
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