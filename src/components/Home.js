import React, { Component } from 'react'
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faEmpire } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

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
					<div className="branding">
						<div className="logo-type">
							<h1 className="site-title">Weather Forecast</h1>
						</div>
					</div>
				</div>
			</div>
			
			<CurrentWeather 
				currentWeatherDetails={currentWeatherDetails}
				todayForecastWeatherDetails={todayForecastWeatherDetails} 
			/>

			<ForecastWeather forecastWeatherDetails={forecastWeatherDetails} />

			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-md-offset-8">
							<div className="social-links col-md-offset-6">
								<a href="https://github.com/ianagpawa" target="_blank"><FontAwesomeIcon  icon={faGithub} /></a>
								<a href="https://www.linkedin.com/in/ianagpawa" target="_blank"><FontAwesomeIcon  icon={faLinkedinIn} /></a>
								<a href="https://ianagpawa.github.io/portfolio" target="_blank"><FontAwesomeIcon  icon={faEmpire} /></a>
								<a href="https://github.com/ianagpawa/weather" target="_blank"><FontAwesomeIcon  icon={faCode} /></a>
							</div>
						</div>
					</div>
					<p className="colophon">Copyrightc copy&{new Date().getFullYear()} Ian Agpawa. Designed by Themezy. All rights reserved</p>
				</div>
			</footer>
		</div>
      );
  }
}

Home.propTypes = {
	currentWeatherDetails: PropTypes.object,
	forecastWeatherDetails: PropTypes.array,
	todayForecastWeatherDetails: PropTypes.array
}