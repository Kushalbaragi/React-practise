import React from 'react';
import Hello from './hello';
import ClassComponent from './classComponent';
import FunctionComponent from './functionComponent';
import ClickEvent from './clickEvent';
import EventBind from './eventBind';
import ClassComponent1 from './ClassComponet1';
import MethodProps from './MethodsProps';
import Condition from './Condition';
import ListRendering from './ListRendering';
import index from './index.module.css';

function App() {
  return (

    
    <>
    <h1 class={index.primary} >Hello css</h1>
   {/* <ClassComponent  name='kushal1' lastname='Baragi2'/>
   <FunctionComponent  name='kushal' lastname='Baragi'/> */}
   {/* <ClickEvent /> */}
   {/* <button onClick={()=>{
    cccc(10,10,10);
   }}>click me to add component</button> */}
   {/* <ClassComponent1/> */}

   {/* <MethodProps/> */}

   {/* <Condition/>x */}
   <ListRendering/>

    </>
    
  );
}

export default App;
