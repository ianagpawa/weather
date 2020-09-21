import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Cards extends Component {
	render() {
		const {
			forecastWeatherDetails,
			todayForecastWeatherDetails
		} =  this.props;
		return (forecastWeatherDetails || todayForecastWeatherDetails).map((day, i) => {
			const key = forecastWeatherDetails ? `forecast${i}` : `today${i}`;
			const temp = parseInt(day && day.main && day.main.temp);
			const url = `http://openweathermap.org/img/wn/${day && day.weather && day.weather[0] && day.weather[0].icon }@2x.png`;
			return (
				<div key={key} className="forecast">
					<div className="forecast-header">
						<div className="day">Tuesday  </div>
					</div>
					<div className="forecast-content">
						<div className="forecast-icon">
							<img src={url} />
						</div>
						<div className="degree">{temp}<sup>o</sup>F</div>
						<small>18<sup>o</sup></small>
					</div>
				</div>
			);
		});
	}
}

Cards.propTypes = {
	forecastWeatherDetails: PropTypes.array,
	todayForecastWeatherDetails: PropTypes.array
}