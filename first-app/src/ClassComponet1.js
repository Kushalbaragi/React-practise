import React from "react";

class ClassComponent1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.message = this.message.bind(this);
  }

  message=()=> {
    console.log(this);
    this.setState({ count: 5 });
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.message}>click to change above message</button>
      </>
    );
  }
}

export default ClassComponent1;
