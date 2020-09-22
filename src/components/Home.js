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
						{/* <img src="images/logo.png" alt="" className="logo"> */}
						<div className="logo-type">
							<h1 className="site-title">Company name</h1>
							<small className="site-description hello" id="hello">tagline goes here</small>
						</div>
					</a>

					<div className="main-navigation">
						<button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
						<ul className="menu">
							<li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
							<li className="menu-item"><a href="news.html">News</a></li>
							<li className="menu-item"><a href="live-cameras.html">Live cameras</a></li>
							<li className="menu-item"><a href="photos.html">Photos</a></li>
							<li className="menu-item"><a href="contact.html">Contact</a></li>
						</ul>
					</div> 

					<div className="mobile-navigation"></div>

				</div>
			</div>

			<div className="hero" data-bg-image="images/banner.png">
				<div className="container">
					{/* <form action="#" className="find-location">
						<input type="text" placeholder="Find your location...">
						<input type="submit" value="Find">
					</form> */}

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