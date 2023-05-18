import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class MethodsProps extends Component {

    constructor(props){
        super(props);
        this.state={
            name:'Kushal Baragi'
        }
        this.callme=this.callme.bind(this);
    }

    callme(childVar){
        alert(`my name is ${this.state.name} i am your ${childVar}`);
    }

  render() {
    return (
      <ChildComponent callMeHnadler={this.callme}/>
    )
  }
}
