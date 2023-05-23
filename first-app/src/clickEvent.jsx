import React, {Component} from 'react';

class ClickEvent extends Component{
    handler(){
        console.log('this is event handler');
    }
    render(){
        return(
            <>
            <div className='container'>
                <div className="section">
            <h1>Class component</h1>
            <button onClick={this.handler}>click me</button>
            </div>
            </div>
            </>
        )
    }
}

export default ClickEvent;