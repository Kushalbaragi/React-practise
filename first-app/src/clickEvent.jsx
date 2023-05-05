import React, {Component} from 'react';

class ClickEvent extends React.Component{
    handler(){
        console.log('this is event handler');
    }
    render(){
        return(
            <>
            <h1>Class component</h1>
            <button onClick={this.handler}>click me</button>
            </>
        )
    }
}

export default ClickEvent;