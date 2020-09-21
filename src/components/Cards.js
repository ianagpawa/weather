import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Cards extends Component {
	render() {
		const {
			forecastWeatherDetails,
			todayForecastWeatherDetails
		} =  this.props;
		return (forecastWeatherDetails || todayForecastWeatherDetails).map((day, i) => {
			return (
				<div className="forecast">
					<div className="forecast-header">
						<div className="day">Tuesday + {i} </div>
					</div>
					<div className="forecast-content">
						<div className="forecast-icon">
							{/* <img src="images/icons/icon-3.svg" alt="" width=48> */}
						</div>
						<div className="degree">23<sup>o</sup>C</div>
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