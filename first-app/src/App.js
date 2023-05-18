import React from 'react';
import Hello from './hello';
import ClassComponent from './classComponent';
import FunctionComponent from './functionComponent';
import ClickEvent from './clickEvent';
import EventBind from './eventBind';
import ClassComponent1 from './ClassComponet1';
import MethodProps from './MethodsProps';
import Condition from './Condition';

function App() {
  let a=10;
  function cccc(num1= 2, num2=4){
      console.log(num1+num2);
    }
 
  return (

    
    <>
   {/* <ClassComponent  name='kushal1' lastname='Baragi2'/>
   <FunctionComponent  name='kushal' lastname='Baragi'/> */}
   {/* <ClickEvent /> */}
   {/* <button onClick={()=>{
    cccc(10,10,10);
   }}>click me to add component</button> */}
   {/* <ClassComponent1/> */}

   {/* <MethodProps/> */}

   <Condition/>

    </>
    
  );
}

export default App;
