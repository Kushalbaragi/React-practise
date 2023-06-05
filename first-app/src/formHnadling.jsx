import React, { useEffect, useState } from "react";

export let FormHandling = function () {
  let [value, setValue] = useState("");
  let [gender, setGender] = useState("");
  useEffect(()=>{
    console.log('useeffect function');
    let temp=document.getElementsByName('gender');
    temp.forEach(a=>{
        if(a.value===value){
            a.checked=true;
        }
    })
  },[value])


  return (
    <>
      <form>
        <label>
          Enter the name
          <input
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
              value = { value };
            }}
          />
        </label>
        <div style={{ paddingTop: "30px", border: "1px solid red" }}>
          <label>
            Gender
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </label>
        </div>
      </form>
    </>
  );
};
