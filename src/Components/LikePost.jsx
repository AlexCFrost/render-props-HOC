import React, { Component } from 'react';

class LikePost extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}> LikePost {count}</button>
  }
}

export default LikePost;
