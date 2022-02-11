import React,{useState} from 'react';
import PropTypes from 'prop-types'
 import './Box.css'

export default function Box(PropType) {
  const [text, settext] = useState(`enter your text here`);
  const handleonchange=(event)=>{
    settext(event.target.value);
  }
  const upper=()=>{
    let newtext=text.toUpperCase();
    settext(newtext)
  }
  const lower=()=>{
    let newtext=text.toLowerCase();
    settext(newtext);
  }
  return( 
  <><div>
<h1 style={{ color:PropType.mode==='dark'?'white':'grey' }}>{PropType.name}.</h1>
<textarea className='text' style={{color:PropType.mode==='dark'?'white':'grey' , backgroundColor:PropType.mode==='dark'?'grey':'white', border:PropType.mode==='dark'?'2px solid white':'2px solid grey'}} value={text}  onChange={handleonchange} rows={"15"}></textarea>
  </div>;
  <button onClick={upper}>convert to uppercase</button>
  <button onClick={lower}>convert to lowercase</button>
  <div className='container' style={{color:PropType.mode==='dark'?'white':'grey' , backgroundColor:PropType.mode==='dark'?'grey':'white'}}>
    <h1>SUMMARY</h1>
    <p>{text.split(" ").length}words and {text.length}character</p>
   <p> READ TIME:{0.008*text.split(" ").length}minutes</p>
   preview:<p>{text}</p>
  </div>
  </>
  );
  }
