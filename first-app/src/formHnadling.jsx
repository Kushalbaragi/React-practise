import React from "react";
import { Component } from "react";

export class FormHandling extends Component {
  constructor(props) {
    super(props);
    this.State = {
      name: "b",
    };
  }
  handler(e){
this.setState({
    name : e.target.value
})
  }

  
  render() {
    console.log(this.State.name);
    return (
      <div className="container">
        <h1>Fill the form</h1>
        <label> Name : 
        <input type="text" value={this.State.name} onChange={this.handler.bind(this)}/>
        </label>
      </div>
    );
  }
}
