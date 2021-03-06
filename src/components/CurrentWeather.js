import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards';
import { getDayName, getShortDate } from '../constants/utils';

export default class CurrentWeather extends Component {
	constructor(props) { super(props); }
  	render() {
	  const {
		currentWeatherDetails,
		todayForecastWeatherDetails
	  } = this.props;
	  const temp = parseInt(currentWeatherDetails && currentWeatherDetails.main && currentWeatherDetails.main.temp);
	  const weather = currentWeatherDetails && currentWeatherDetails.weather && currentWeatherDetails.weather[0];
	  const url = `https://openweathermap.org/img/wn/${weather && weather.icon }@2x.png`;
	  const description = weather && weather.main;
	  const { 
		  dt_txt,
		  name,
		} = currentWeatherDetails;
	  const day = getDayName(dt_txt);
	  const shortDate = getShortDate(dt_txt);

	  return (
			<div className="forecast-table">
				<div className="container">
					<div className="forecast-container">
						<div className="today forecast">
							<div className="forecast-header">
	  							<div className="day">{day}</div>
								{/* <div className="">{name}</div> */}
	  							<div className="date">{shortDate}</div>
							</div> 
							<div className="forecast-content">
	  							<div className="location">{name}</div>
								<div className="degree">
									<div className="num">{temp}<sup>o</sup>F</div>
									<div className="forecast-icon">
										<img src={url} />
	  									<p>{description}</p>
									</div>	
								</div>
							</div>
						</div>
						<Cards 
							todayForecastWeatherDetails={todayForecastWeatherDetails}
						/>
					</div>
				</div>
			</div>
        );
    }
}

CurrentWeather.propTypes = {
	currentWeatherDetails: PropTypes.object.isRequired,
	todayForecastWeatherDetails: PropTypes.array.isRequired
}