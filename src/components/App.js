import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
const [color , setColor] = useState("");
const [isBoolean , setIsBoolean] = useState(false)

  const handleChange = ((e)=>{
    setColor(e.target.value)
    setIsBoolean(true)

  })
  return (
    <div id="main">
      {/* <h1>Hello You can Chose your mood here</h1> */}
        <select value={color} onChange={handleChange}>
          <option value="rgb(238, 241, 0)">Happy</option>
          <option value="rgb(19, 0, 164)">Sad</option>
          <option value="rgb(35, 177, 0)">Sleepy</option>
          <option value="rgb(255, 0, 66)">Excited</option>
        </select>
      <div id="mood-indicator" style={{backgroundColor:isBoolean ?color :'rgb(238, 241, 0)'}}></div>
    </div>
  )
}

export default App;
