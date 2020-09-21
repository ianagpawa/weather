import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards';

export default class ForecastWeather extends Component {
	constructor(props) { super(props); }
  render() {
	  const { forecastWeatherDetails } = this.props;
	  console.log('forecast')
      return (
			<div className="forecast-table forecast-div">
				<div className="container">
					<div className="forecast-container">
						<Cards 
							forecastWeatherDetails={forecastWeatherDetails}
						/>
					</div>
				</div>
			</div>
        );
    }
}

ForecastWeather.propTypes = {
//   posts: PropTypes.array.isRequired
	forecastWeatherDetails: PropTypes.array.isRequired
}
