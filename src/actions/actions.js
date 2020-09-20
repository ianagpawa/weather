import fetch from 'cross-fetch';

// export const REQUEST_POSTS = 'REQUEST_POSTS'
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
// export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const FETCH_WEATHER = `FETCH_WEATHER`;
export const FETCH_WEATHER_SUCCESS = `FETCH_WEATHER_SUCCESS`;
export const FETCH_WEATHER_FAILURE = `FETCH_WEATHER_FAILURE`;

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}

export function fetchWeatherSuccess(payload) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload
  };
}

export function fetchWeatherFailure(payload) {
  return {
    type: FETCH_WEATHER_FAILURE,
    payload
  };
}


// export function selectSubreddit(subreddit) {
//   return {
//     type: SELECT_SUBREDDIT,
//     subreddit
//   }
// }

// export function invalidateSubreddit(subreddit) {
//   return {
//     type: INVALIDATE_SUBREDDIT,
//     subreddit
//   }
// }

// function requestPosts(subreddit) {
//   return {
//     type: REQUEST_POSTS,
//     subreddit
//   }
// }

// function receivePosts(subreddit, json) {
//   return {
//     type: RECEIVE_POSTS,
//     subreddit,
//     posts: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
//   }
// }

// function fetchPosts(subreddit) {
//   return dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//       .then(response => response.json())
//       .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }
// 8a4604e1c9724c6c163653f91c504862di
export function getWeather() {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=New%20York%20City&appid=8a4604e1c9724c6c163653f91c504862`
  return dispatch => {
    dispatch(fetchWeather());
    return fetch(url)
      .then(response => {
        console.log(response.json());
        return response.json();
      })
      .then(json => dispatch(fetchWeatherSuccess(json)))
      .catch(err => dispatch(fetchWeatherFailure(err)));
  }
}

// export function getWeatherDetails() {
//   return (dispatch, getState) => {

//   }
// }

// function shouldFetchPosts(state, subreddit) {
//   const posts = state.postsBySubreddit[subreddit]
//   if (!posts) {
//     return true
//   } else if (posts.isFetching) {
//     return false
//   } else {
//     return posts.didInvalidate
//   }
// }

// export function fetchPostsIfNeeded(subreddit) {
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), subreddit)) {
//       return dispatch(fetchPosts(subreddit))
//     }
//   }
// }