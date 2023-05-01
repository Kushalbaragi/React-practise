import React, {useState} from "react";

function FunctionComponent(props){
    const {name,lastname}=props;
    const [text, setText]=useState('kushal');
    const [count, setCount]=useState(0);
    function change(){
        setText('Baragi');
        setCount(count+1);
    }
    return(
        <React.Fragment>
            <div className="container">
                <section>
{/* <h1>my name is {text}</h1>
<p>click the below button to change it</p>
<button onClick={change}>click me</button>
<p>clicked <b>{count}</b> times</p> */}
<h1>{name} {lastname}</h1>

</section>
</div>

</React.Fragment>
    )
}

export default FunctionComponent;