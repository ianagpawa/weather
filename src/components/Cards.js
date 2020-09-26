import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
	getDayName,
	getHour,
	getShortDate
 } from '../constants/utils';
export default class Cards extends Component {
	render() {
		const {
			forecastWeatherDetails,
			todayForecastWeatherDetails
		} =  this.props;
		return (forecastWeatherDetails || todayForecastWeatherDetails).map((day, i) => {
			const key = forecastWeatherDetails ? `forecast${i}` : `today${i}`;
			const weather = day && day.weather && day.weather[0];
			const { dt_txt } = day;
			const temp = parseInt(day && day.main && day.main.temp);
			const description = weather.main;
			const url = `https://openweathermap.org/img/wn/${weather.icon }@2x.png`;
			const dayName = getDayName(dt_txt);
			const hour = getHour(dt_txt);
			const dayOrText = key.indexOf('forecast') !== -1 ? dayName : hour;
	  		const shortDate = key.indexOf('forecast') !== -1 ? getShortDate(dt_txt) : null;
			return (
				<div key={key} className="forecast">
					<div className="forecast-header">
						<div className="day">{dayOrText}</div>
						<div>{shortDate}</div>
					</div>
					<div className="forecast-content">
						<div className="forecast-icon">
							<img src={url} />
						</div>
						<div className="description">{description}</div>
						<div className="degree">{temp}<sup>o</sup>F</div>
							
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