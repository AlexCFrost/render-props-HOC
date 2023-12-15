import React, { Component } from 'react';

class LikeImage extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}> LikeImage {count}</button>
  }
}

export default LikeImage;
