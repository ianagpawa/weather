import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  // selectSubreddit,
  // fetchPostsIfNeeded,
  // invalidateSubreddit
  getWeather
} from '../actions/actions';
// import Picker from '../components/Picker'
// import Posts from '../components/Posts'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    console.log('harlo')
    
    // this.handleChange = this.handleChange.bind(this)
    // this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    console.log('here');
    
    // const { weatherDetails  } = this.props;
    // dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  componentDidUpdate(prevProps) {
    // if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
    //   const { dispatch, selectedSubreddit } = this.props
      // dispatch(fetchPostsIfNeeded(selectedSubreddit))
    // }
  }

  // handleChange(nextSubreddit) {
  //   this.props.dispatch(selectSubreddit(nextSubreddit))
  //   this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
  // }

  // handleRefreshClick(e) {
  //   e.preventDefault()

  //   const { dispatch, selectedSubreddit } = this.props
  //   dispatch(invalidateSubreddit(selectedSubreddit))
  //   dispatch(fetchPostsIfNeeded(selectedSubreddit))
  // }

  render() {
    const { weatherDetails } = this.props;
    return (
      <div>Rendered template</div>
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
  // selectedSubreddit: PropTypes.string.isRequired,
  // posts: PropTypes.array.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // lastUpdated: PropTypes.number,
  // dispatch: PropTypes.func.isRequired,
  details: PropTypes.array
}

function mapStateToProps(state) {
  const { weatherDetails } = state;
  return { weatherDetails };
  // const { selectedSubreddit, postsBySubreddit } = state
  // const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
  //   selectedSubreddit
  // ] || {
  //   isFetching: true,
  //   items: []
  // }

  // return {
  //   selectedSubreddit,
  //   posts,
  //   isFetching,
  //   lastUpdated
  // }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     getWeather: () => dispatch(getWeather())
//   }
// }

const mapDispatchToProps = dispatch => bindActionCreators({
  getWeather
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncApp)