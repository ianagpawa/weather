import fetch from 'cross-fetch';

function getUrl(params) {
    const {
        type,
        city,
        units
    } = params;
    return `https://api.openweathermap.org/data/2.5/${type}?q=${city}&units=${units}&appid=8a4604e1c9724c6c163653f91c504862`;
}

export const getRequest = (params)  => {
    const {
        type,
        city,
        units,
        fetchFunc,
        fetchSuccessFunc,
        fetchFailureFunc
    } = params;
    return dispatch => {
      dispatch(fetchFunc());
      return fetch(getUrl({type, city, units}))
        .then(response => {
            if(!response.ok) { throw new Error("not ok"); }
            return response.json();
        })
        .then(json => dispatch(fetchSuccessFunc(json)) )
        .catch(err => dispatch(fetchFailureFunc(err)) );
    }
}
