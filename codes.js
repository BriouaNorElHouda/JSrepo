
  //////////////////////////////////////////////////////EXO1-1//////////////////////////////////////////////////////////
  class ClickB extends React.Component {
    constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    this.setState({ clicked: true });
    }
    render() {
    return (
    <div>
    <button  onClick={this.handleClick}>Click me!</button>
    <h1 style={{color: "red"}}>
    {this.state.clicked ? 'Clicked' : ''}
    </h1>
    </div>
    );
    }
   } 
  export default ClickB;

  //////////////////////////////////////////////////////EXO1-2//////////////////////////////////////////////////////////////////
  import "./App.css";
import React, { useState } from "react";

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map((type) => (
          <button
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
           Button {type}
          </button>
        ))}
      </div>
      <p />
      <p> The Button {active} was clicked</p>
    </>
  );
}

const types = ["1", "2", "3"];
export default function App() {
  return (
    <>
      <TabGroup />
    </>
  );
}


//////////////////////////////////////////////////EXO1-3////////////////////////////////////////////////////////////
import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="app">
      <button onClick={incrementCount}>Click</button>
      <h1>Compteur {count}</h1>
      
    </div>
  );
}

export default App;
//////////////////////////////////////////////////EXO1-4/////////////////////////////////////
function App() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };
    const decrementCount = () => {
      setCount(count - 1);
    };
    return (
      <div >
        <button onClick={incrementCount}>Inc</button>
        <button onClick={decrementCount}>Dec</button>
        <h1>Compteur {count}</h1>
        
      </div>
    );
  }
  export default App;
  /////////////////////////////////EXO1-2TD4///////////////////////////////////////
  
function   ToggleButton() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <button 
            onClick={() => setToggle(!toggle)} 
           >
          Toggle Button
      </button>
      {toggle && (
         <h1 style={{color: "red"}}>
          Clicked
         </h1>
      )}
      {!toggle && (
         <h1 style={{color: "red"}}>
         Not Clicked
         </h1>
      )}
    </>
  )
}
export default  ToggleButton;


//////////////////////////////////EXO-3TD4///////////////////////////////////////////
function EXO3() {
  const [active, setActive] = useState(elems[0]);
  return (
    <>
      <div>
        {elems.map((elem) => (
          <button
            key={elem}
            active={active === elem}
            onClick={() => setActive(elem)}
          >
           Button {elem}
          </button>
        ))}
      </div>
      <p />
      <p> The Button {active} was clicked</p>
    </>
  );
}

const elems = ["1", "2", "3"];
export default function App() {
  return (
    <>
      <EXO3 />
    </>
  );
}

//////////////////////////EXO3TD1//////////////////////////

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div >
      <button onClick={setCount(count + 1)}>Inc</button>
      <button onClick={setCount(count - 1)}>Dec</button>
      <h1>Compteur {count}</h1>
      
    </div>
  );
}
export default App;
/////////////////////////////////////EXO2TPQ1///////////////////////////////

class DisplayTab extends React.Component {
  render() {
    let tab = ['Hello','World','from','react'];
   let DisplayTab = tab.map ((e) =>
  <li> {e} </li> );
  return(
  <>
  <ul>
  {DisplayTab}
  </ul>
  </>)
  } }
export default DisplayTab;

/////////////////////////////EXO2TPQ2////////////////////////////////////////////

class Exo2Q2 extends React.Component {
  render() {
  let tab = ["hello","world","from","react"].map ((e,i) => 
  <li key ={i}> Element {i+1} is : {e}</li> );
  return(
  <div>
  <ul>
  { tab} 
  </ul>
  </div>)
  }
  }
  export default Exo2Q2;
  /////////////////////////////////EXO2Q3TP///////////////////////////////////
  
import { useState } from 'react';

export default function App() {
  const [distab, setDistab] = useState(true);
  const removeElement = () => {
    setDistab((prev) => !prev);
  };
  let tab = ["hello","world","from","react"].map ((e,i) => 
  <li onClick={ removeElement} key ={i}> Element {i+1} is : {e}</li> );
  return (
    <>
      <br />
      {distab && (
      
        <ul>{ tab} </ul>
      )}
    </>
  );
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~ãllthe items~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Exo2Q2 extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { removeElement: false };
    this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
    this.setState(["hello","world","from","react"].filter);
    }
  render() {
  let tab = ["hello","world","from","react"].map ((e,i) => 
  <li onClick={this.handleClick} key ={i}> Element {i+1} is : {e}</li> );
  return(
  <>
  <ul>
  { tab} 
  </ul>
  </>)
  }
  }
  export default Exo2Q2;
  ///////////////////////////////EXO3TPQ1/////////////////////////////////
