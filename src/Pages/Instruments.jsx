import React, { useState } from 'react'
import { Frame, useMotionValue, useTransform, useAnimation } from 'framer';
import InstrumentWrapper from './InstrumentWrapper';
import { makeStyles } from '@material-ui/core/styles';
function Instruments(props) {

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'center',
      // [theme.breakpoints.up('sm')]:
      // {},  
      // [theme.breakpoints.down('sm')]: {
      //   width: '90vw',
      //   maxWidth: '460px',
      //   height: '400px'
      // }
    }
  
}));
  
  const {handleClose, handleOpen, setIsLoggedIn} = props;
  const classes=useStyles();
  const [sel, setSel] = useState([]);       
  const [rej, setRej] = useState([]);       
  
   
  

  
  return (
    <div>
    
      {/* {instruments && instruments.map((instrument,i) => */}

          <div className={classes.container}>
           <InstrumentWrapper handleOpen={handleOpen}  handleClose={handleClose}  rej={rej} sel={sel}  setSel={setSel} setRej={setRej} setIsLoggedIn={setIsLoggedIn}/>
    
          	{/* <Card key={i}  rej={rej} sel={sel}  setRej={setRej} setIsLoggedIn={setIsLoggedIn} setSel={setSel}></Card> */}
          </div>
          
        {/* )} */}
  </div>
      );
  }

export default Instruments;
