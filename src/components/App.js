import React from 'react'
import '../styles/App.css';
import { useState } from 'react';
const App = () => {

  const [opt,seOpt]=useState("square");
  const [opt1,setOpt1]=useState([]);

  const sel=(e)=>{
    seOpt(e.target.value);
  }
  const add=()=>{
    setOpt1([...opt1, opt]);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select onClick={sel}>
          <option value="square" selected>Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={add}>Add Shape</button>

      </div>
      <div id="shapes-holder">
        {opt1.map((elem,index)=>(
            <div className={elem}>{index}
            </div>
        ))}
      </div>
    </div>
  )
}


export default App;
