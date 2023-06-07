import PropTypes from "prop-types";
import React, { Component, useEffect, useState } from "react";

function Condition() {
  let [count, setCount] = useState({
    name: "kushal",
    age: 26,
  });

  useEffect(()=>{
    console.log('USEEEFECT');
    return ()=>{
        console.log('use effect return');
    }
  },[])
  function handler() {
    setCount({...count,name:'blue'});
  }
  console.log(count);

  return (
    <>
      <div>
        {count.name} {count.age}
      </div>
      <button onClick={handler}>click</button>
    </>
  );
}

export default Condition;
