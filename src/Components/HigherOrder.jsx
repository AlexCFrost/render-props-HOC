import React, { Component } from "react";

const HigherOrder = (WrappedComponent) => {
  class Changed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        likePost: 0,
      };
    }

    handlePost = () => {
      this.setState((prevState) => ({
        likePost: prevState.likePost + 1,
      }));
    };

    render() {
      return (
        <WrappedComponent
          likePost={this.state.likePost}
          handlePost={this.handlePost}
          {...this.props}
        />
      );
    }
  }

  return Changed;
};

export default HigherOrder;
