import React, { Component } from "react";

export default class ChildComponent extends Component {

constructor(props){
    super(props);
    console.log(this.props);
let value=this.props.stateValue
console.log(value);

}

  render() {
    return (
      <>
        <button onClick={()=>{this.props.handler(!this.value)}}>click to change value</button>
      </>
    );
  }
}
