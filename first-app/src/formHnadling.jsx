import React, { Component } from "react";

export class FormHandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("component did mount");
  }
  static getDerivedStateFromProps() {
    console.log("get derived state from props");
    return null;
  }
  shouldComponentUpdate(a, b) {
    console.log(a, b);
    console.log("shouldComponentUpdate");
    return true;
  }
  static getDerivedStateFromProps(a,b) {
    console.log(a, b);

    console.log("get derived state from ff");
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    console.log("getSnapshotBeforeUpdate");
    return null
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click me
        </button>
      </>
    );
  }
}
