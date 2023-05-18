import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    return (
      <>
        <button onClick={()=>this.props.callMeHnadler('first child bro!!!')}>I am child button bro!!!</button>
      </>
    );
  }
}
