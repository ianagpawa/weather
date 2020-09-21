import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards';

export default class CurrentWeather extends Component {
	constructor(props) { super(props); }
  render() {
	  const {
		currentWeatherDetails,
		todayForecastWeatherDetails
	  } = this.props;
	  const temp = parseInt(currentWeatherDetails && currentWeatherDetails.main && currentWeatherDetails.main.temp);
	  const url = `http://openweathermap.org/img/wn/${currentWeatherDetails && currentWeatherDetails.weather && currentWeatherDetails.weather[0] && currentWeatherDetails.weather[0].icon }@2x.png`
      return (
			<div className="forecast-table">
				<div className="container">
					<div className="forecast-container">
						<div className="today forecast">
							<div className="forecast-header">
								<div className="day">Monday</div>
								<div className="date">6 Oct</div>
							</div> 
							<div className="forecast-content">
								<div className="location">New York</div>
								<div className="degree">
									<div className="num">{temp}<sup>o</sup>F</div>
									<div className="forecast-icon">
										<img src={url} />
									</div>	
								</div>
								{/* <span><img src="images/icon-umberella.png" alt="">20%</span>
								<span><img src="images/icon-wind.png" alt="">18km/h</span>
								<span><img src="images/icon-compass.png" alt="">East</span> */}
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
//   posts: PropTypes.array.isRequired
	currentWeatherDetails: PropTypes.object.isRequired,
	todayForecastWeatherDetails: PropTypes.array.isRequired
}