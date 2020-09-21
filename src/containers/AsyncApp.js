import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import {
  getCurrentWeather,
  getForecastWeather
} from '../actions/weather';

class AsyncApp extends Component {
  constructor(props) { super(props); }

  componentDidMount() {
    const { 
      getCurrentWeather,
      getForecastWeather
    } = this.props;
    getCurrentWeather();
    getForecastWeather();
  }

  componentDidUpdate(prevProps) { }

  render() {
    const { 
      currentWeatherDetails,
      forecastWeatherDetails,
      todayForecastWeatherDetails
    } = this.props;
    return (
      <Home 
        currentWeatherDetails={this.props.currentWeatherDetails}
        forecastWeatherDetails={this.props.forecastWeatherDetails}
        todayForecastWeatherDetails={this.props.todayForecastWeatherDetails} 
      />
    );
    // const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
    // return (
    //   <div>
    //     <Picker
    //       value={selectedSubreddit}
    //       onChange={this.handleChange}
    //       options={['reactjs', 'frontend']}
    //     />
    //     <p>
    //       {lastUpdated && (
    //         <span>
    //           Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
    //         </span>
    //       )}
    //       {!isFetching && (
    //         <button onClick={this.handleRefreshClick}>Refresh</button>
    //       )}
    //     </p>
    //     {isFetching && posts.length === 0 && <h2>Loading...</h2>}
    //     {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
    //     {posts.length > 0 && (
    //       <div style={{ opacity: isFetching ? 0.5 : 1 }}>
    //         <Posts posts={posts} />
    //       </div>
    //     )}
    //   </div>
    // )
  }
}

AsyncApp.propTypes = {
  currentWeatherDetails: PropTypes.object,
  forecastWeatherDetails: PropTypes.array,
  todayForecastWeatherDetails: PropTypes.array
}

function mapStateToProps(state) {
  const { 
    currentWeatherDetails, 
    forecastWeatherDetails,
    todayForecastWeatherDetails
  } = state;
  return { 
    currentWeatherDetails,
    forecastWeatherDetails,
    todayForecastWeatherDetails
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentWeather,
  getForecastWeather
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncApp)