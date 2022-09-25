import React from 'react'
import "./index.css"
import { useState } from "react"


const App = () => {
  const [calc, setCalc]= useState("");
  const [result, setResult]= useState("");

  const ops=['/','*','-','+','.'];
  const updateCalc=value=>{
      if(
        ops.includes(value) && calc===''||
        ops.includes(value) && ops.includes(calc.slice(-1))
      ){
        return;
      }
      setCalc(calc+value);
      if(!ops.includes(value)){
        setResult(eval(calc+value).toString());
      }
  }
  const calculate=()=>{
    setCalc(eval(calc).toString());
  }
  const deleteLast=()=>{
    if(calc===''){
      return;
    }
    const value= calc.slice(0,-1);
    setCalc(value);
    result(value);
  }
  const clearAll=()=>{
    if(calc===''){
      return;
    }
    const value=calc.slice(0,-calc.length);
    setCalc(value);
    setResult('0');
  }
  const logarithmicF=()=>{
     if(calc===''){
      return;
     }
     const value=Math.log(calc);
     setResult(value.toString());
  }
  const powerFunc=()=>{
    if(calc===''){
      return;
    }
    const value=Math.pow(calc,2);
    setResult(value.toString());
  }

  const createDigits=()=>{
     const Digits=[];
     for(let i=1;i<10;i++){
      Digits.push(
       <button onClick={()=> updateCalc(i.toString())} key={i}>{i}</button>);
     }
     return Digits;
  }
  return (
    <>
    <div className='calculator'>
      <div className='display'>
        {calc||"0"}
       <div div className='result'> {result ? <span>{result}</span> : ''}</div>
        
      </div>
      <div className='operator'>
        
        <button onClick={()=> updateCalc('/')}>/</button>
        <button onClick={()=> updateCalc('*')}>*</button>
        <button onClick={()=> updateCalc('+')}>+</button>
        <button onClick={()=> updateCalc('-')}>-</button> 
        <button onClick={clearAll}>CE</button>
      
      </div>
      <div className='operator1'>
        <button onClick={()=> updateCalc('(')}>(</button>
        <button onClick={()=> updateCalc(')')}>)</button>
        <button onClick={logarithmicF}>ln</button>
        <button onClick={powerFunc}>X^2</button>
        <button onClick={deleteLast}>Del</button>
     </div>
      <div className='digits'>
        {createDigits()}
        <button onClick={()=> updateCalc('0')}>0</button>
        <button onClick={()=> updateCalc('.')}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
      
    </>
  )
}

export default App

