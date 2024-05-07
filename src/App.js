import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import './index.css'


const App=()=>{
  const [p, setP]=useState(0)
  const [t, setT]=useState(0)
  const [r, setR]=useState(0)
  const [si, setSI]=useState(0)
  
  const calculateinterest=()=>{
    setSI(p*t*r/100)
  }

  return (
    <div className='div'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest Calculator
          </Typography>
        </Toolbar>
      </AppBar><br/>
      <TextField onChange={(event)=>setP(event.target.value)} id="outlined-basic" label="Enter principal" variant="outlined" />
      <br/><br/>
      <TextField onChange={(event)=>setT(event.target.value)} id="outlined-basic" label="Enter time" variant="outlined" />
      <br/><br/>
      <TextField onChange={(event)=>setR(event.target.value)} id="outlined-basic" label="Enter interest rate" variant="outlined" />
      <br/><br/>
      <Button onClick={()=>calculateinterest()} variant="contained">Calculate</Button>
      <Typography variant="h6" gutterBottom>
        Simple interest: {si}
      </Typography>
    </div >
  );
}

export default App;
