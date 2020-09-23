import React, { Component } from 'react'
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import PropTypes from 'prop-types';

export default class Home extends Component {
	constructor(props) { super(props); }
  render() {
	  const {
		currentWeatherDetails,
		forecastWeatherDetails,
		todayForecastWeatherDetails
	  } = this.props;
      return (
        <div className="site-content">
			<div className="site-header">
				<div className="container">
					<a href="index.html" className="branding">
						<a href="https://github.com/ianagpawa/weather" target="_blank">
						<div className="logo-type">
							<h1 className="site-title">Weather Forecast</h1>
							<small className="site-description hello" id="hello">Check out the code</small>
						</div>
						</a>
					</a>

					<div className="main-navigation">
						<ul className="menu">
							{/* <li className="menu-item current-menu-item"><a href="index.html">Home</a></li> */}
							<li className="menu-item"><a href="https://ianagpawa.github.io/portfolio/" target="_blank">Portfolio</a></li>
						</ul>
					</div> 

					<div className="mobile-navigation"></div>

				</div>
			</div>
			
			<CurrentWeather 
				currentWeatherDetails={currentWeatherDetails}
				todayForecastWeatherDetails={todayForecastWeatherDetails}
			/>

			<ForecastWeather
				forecastWeatherDetails={forecastWeatherDetails}
			/>
		</div>
      );
  }
}

Home.propTypes = {
	currentWeatherDetails: PropTypes.object,
	forecastWeatherDetails: PropTypes.array,
	todayForecastWeatherDetails: PropTypes.array
}