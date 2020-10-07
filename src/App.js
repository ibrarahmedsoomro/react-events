import React, { useState } from 'react';
import './App.css'

const App = () => {
  let purple = "yellow"
  const [bg, setBg] = useState(purple);

  const [name, setName] = useState('Click Me')
  const bgClick = ()=> {
  console.log("click me")

  let newbg = "orange"
  setBg(newbg)
  setName('developer jani')
  }
  return (
    <>
    <div style={{backgroundColor : bg}}>
  <button onClick={bgClick}>{name}</button>
    </div>
  </>
  );

}

export default App;