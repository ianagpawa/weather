import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards';

export default class ForecastWeather extends Component {
	constructor(props) { super(props); }
	render() {
		const { 
			forecastWeatherDetails,
			todayForecastDetails
		} = this.props;
		const combined = [...todayForecastDetails, ...forecastWeatherDetails]
		return (
				<div className="forecast-table forecast-div">
					<div className="container">
						<div className="forecast-container">
							<Cards 
								forecastWeatherDetails={combined}
							/>
						</div>
					</div>
				</div>
			);
		}
}

ForecastWeather.propTypes = {
	forecastWeatherDetails: PropTypes.array.isRequired,
	todayForecastDetails: PropTypes.array.isRequired
}
