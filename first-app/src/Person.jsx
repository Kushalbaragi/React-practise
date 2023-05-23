import React from "react";

function Person({ persons }) {
    let newarr = persons.map((name) => {
        let arr2 = [];
        for (let key in name) {
            if(name.age<50){
                arr2.push(<li key={key}>{name[key]}</li>);
            }
          
        }
        return ( <ol key={name.id}>{arr2}</ol>)
      });
      return newarr;
    }

export default Person;
