import React, {useState} from 'react'
import './style.css';

function ListRendering() {
    let [names, setNames]=useState(['kushal','sadashiv']);


    function handlerbeg(){
        let input=document.getElementById('input').value;
        setNames(()=>[input,...names]);
    }
    function handlerend(){
        let input=document.getElementById('input').value;
        setNames(()=>[...names,input]);
    }
    let sort=()=>{
        let arr=[...names];
        for(let i=0; i<arr.length-1;i++){
            for(let j=0;j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    let temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        setNames(arr);

    }
 let kkk={
    color:'blue',
    bacckgroundColor:'black',
    fontSize:'42px'
 }

  return (
    <>
    <div>
        {
            names.map(name=><h1 key={name}>{name}</h1>)
        }
    </div>
    <input class='primary' id='input' type='text' defaultValue='savita'/>
    <button onClick={handlerbeg}>click to add begining</button>
    <button onClick={handlerend}>click to add end</button>
    <button onClick={sort}>click to sort by names</button>
    </>
  )
}

export default ListRendering