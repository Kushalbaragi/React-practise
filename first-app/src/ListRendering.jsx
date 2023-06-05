import React, { useEffect, useState } from "react";

function ListRendering() {
  let [data, setData] = useState([]);



useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err));
},[])
    function handler(e){
        console.log(e);
        let newarr=data.filter(ele=>ele.id!==e);
        console.log(newarr);
        console.log(data);
        setData([...newarr]);
    }

    // localStorage.setItem('name','kushal baragi');
    // localStorage.setItem('password','Tiger@9845');

    // console.log(localStorage.getItem('name'));
    // console.log(localStorage.getItem('password'));

    // // let pass=prompt('enter new password');

    // // localStorage.setItem("password",pass);
    // // console.log("your new password" + localStorage.getItem('password'));
    // console.log(localStorage.name);
    
    
document.cookie='name=kushal baragi';
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00";

console.log(document.cookie);




  return (
    <table>
        <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>body</th>
      </tr>
      </thead>
      <tbody>
      {
        data.map(value=>{
           return <tr key={value.id}>
                    <td onClick={()=>handler(value.id)}>{value.id}</td>
                    <td onClick={()=>handler(value.id)}> {value.title}</td>
                    <td onClick={()=>handler(value.id)}>{value.body}</td>
           </tr>

        })
      }
      </tbody>

    </table>
  );
}

export default ListRendering;
