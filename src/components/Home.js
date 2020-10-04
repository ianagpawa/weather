import React, { Component } from 'react'
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';
// import ErrorMessage from './ErrorMessage';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faEmpire } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default class Home extends Component {
	constructor(props) { 
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault();
		const { 
			getCurrentWeather,
			getForecastWeather
		} = this.props;
		getCurrentWeather(event.target.city.value);
		getForecastWeather(event.target.city.value);
	}

  	render() {
	  const {
		currentWeatherDetails,
		forecastWeatherDetails,
		todayForecastWeatherDetails,
		todayForecastDetails,
		fetchFailure
	  } = this.props;
	 const errorMessage =  (
		<div className={fetchFailure ? 'container text-red' : 'hidden'}>
			<h3>Could not find your city!</h3>
		</div>
	  )

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
			
			{/* <div className="hero" data-bg-image="images/banner.png"> */}
			<div className="hero">
			{errorMessage}
				<div className="container">
					<form className="find-location" onSubmit={this.handleSubmit}>
						<input type="text" name="city" placeholder="Search for your city..."/>
						<input type="submit" value="Search" />
					</form>
				</div>
			</div>
			
			<CurrentWeather 
				currentWeatherDetails={currentWeatherDetails}
				todayForecastWeatherDetails={todayForecastWeatherDetails} 
			/>

			<ForecastWeather
				todayForecastDetails={todayForecastDetails}
				forecastWeatherDetails={forecastWeatherDetails} 
			/>

			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-md-offset-6">
							<div className="social-links col-md-offset-6">
								<a href="https://github.com/ianagpawa" target="_blank"><FontAwesomeIcon  icon={faGithub} /></a>
								<a href="https://www.linkedin.com/in/ianagpawa" target="_blank"><FontAwesomeIcon  icon={faLinkedinIn} /></a>
								<a href="https://ianagpawa.github.io/portfolio" target="_blank"><FontAwesomeIcon  icon={faEmpire} /></a>
								<a href="https://github.com/ianagpawa/weather" target="_blank"><FontAwesomeIcon  icon={faCode} /></a>
							</div>
						</div>
					</div>
					<p>Copyright &copy;{new Date().getFullYear()} <span className="ian">Ian Agpawa</span>. Designed by Themezy. All rights reserved</p>
				</div>
			</footer>
		</div>
      );
  }
}

Home.propTypes = {
	currentWeatherDetails: PropTypes.object,
	forecastWeatherDetails: PropTypes.array,
	todayForecastWeatherDetails: PropTypes.array,
	todayForecastDetails: PropTypes.array,
	fetchFailure: PropTypes.bool,
	getForecastWeather: PropTypes.func,
	getCurrentWeather: PropTypes.func
}