import React, { Component } from "react";

const implant = (WrappedComponent) => {
  class Changed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        likePost: 0,
      };
    }

    handlePostCount = () => {
      this.setState((prevState) => ({
        likePost: prevState.likePost + 1,
      }));
    };

    render() {
      return (
        <WrappedComponent
          likePost={this.state.likePost}
          handlePostCount={this.handlePostCount}
          {...this.props}
        />
      );
    }
  }

  return Changed;
};

export default implant;
