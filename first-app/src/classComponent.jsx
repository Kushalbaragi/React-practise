import React, { Component, useState } from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "kushal baragi",
      count: 0,
    };
  }
  static getDerivedStateFromClass(){
    console.log('derived from class');
    
  }
  change() {

    
    
    this.setState({
      text: "name has changed",
      count: this.state.count + 1,
    });
  }

  render() {
    const { name, lastname } = this.props;
    return (
      <div className="container">
        <section>
          <h1>
            {name} {lastname}
          </h1>

          {/* <h1>my name is {this.state.text}</h1>
          <p>click the below button to change it</p>
          <button onClick={()=>{
            this.change();
          }}>click me</button>
          <p>
            clicked <b>{this.state.count}</b> times
          </p> */}
        </section>
      </div>
    );
  }
}

export default ClassComponent;
