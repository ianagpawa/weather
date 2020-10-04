import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorMessage extends Component {
	constructor(props) { super(props); }
  	render() {
	  const {
		fetchFailure
	  } = this.props;

      return (
            <div className="container">
                <p>Something went wrong!</p>
            </div>
            )
    }
}

ErrorMessage.propTypes = {
	fetchFailure: PropTypes.bool.isRequired,
}