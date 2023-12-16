import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {

  const [amount,setAmount]=useState(0);
  const [year,setYear]=useState(0);
  const [rate,setRate]=useState(0)
  const [interest,setInterest]=useState(0);
  console.log(amount,year,rate);
  const calculate=(e)=>{
    const output=amount*year*rate/100;
    console.log(output);
    setInterest(output);
  }
const reset=(e)=>{
    setAmount(0);
    setYear(0)
    setRate(0)
    setInterest(0)
  }
  return (
    <div className="App">
      <div className="container">

        <div className="header">
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your simple intrest with us ❤️</p>
        </div>


        <div className="total">
          <h2>&#8377; {interest}</h2>
          <p>Your Total Interest</p>
        </div>

       <div className="form">
        <form>
          <div className="input">
          <TextField id="filled-basic" label="Amount" variant="filled" onChange={(e)=>setAmount(e.target.value)} value={amount ||""}/> <br />

          <TextField id="filled-basic" label="Rate" variant="filled" onChange={(e)=>setRate(e.target.value)} value={rate ||""}/><br />

          <TextField id="filled-basic" label="Year" variant="filled" onChange={(e)=>setYear(e.target.value)}value={year ||""}/> <br />
          </div>
          <div className="button">
          <Button variant="contained" onClick={(e)=>calculate(e)}>Calculate</Button>
<Button variant="outlined" onClick={(e)=>reset(e)} >Reset</Button>
          </div>
          </form></div> 
      </div>
    </div>
  );
}

export default App;
