import logo from './logo.svg';
import './App.css';
import Navbar from'./components/navbar';
import Box from './components/Box';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
function App() {
  const[mode , setmode]=useState('light');
  const toggle=()=>{
    if(mode==='light')
    {setmode('dark');
  document.body.style.backgroundColor='grey';
showalert('dark mode is enabled','success')
}
    else
    {setmode('light');
  document.body.style.backgroundColor='white';
 showalert('light mode is enabled','success')
}
  }
  const [alert, setalert] = useState('null')
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert('null');
    }, 1500);
  }
  return (<>

    <Navbar  title="TextEditor" aboutText="About" mode={mode} toggle={toggle} />
<Alert alert={alert}/>
  
   {/* <About/> */}
   
   < Box name="ENTER YOUR TEXT" mode={mode}/> 
      
   
  </>
  );
}

export default App;
