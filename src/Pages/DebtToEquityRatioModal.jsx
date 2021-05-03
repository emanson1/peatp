import React from 'react';
import {Grid, Box} from '@material-ui/core';
export default function DebtToEquityRatioModal (props) {
  const {modalProps, handleClose}=props;
  const instrument=modalProps.instrument;
  const handleClose1 = () => {
    const closestr="here";
    handleClose();
  };
  return(
          <div style={{width:"300px",backgroundColor:"white"}}>
             <button type="button" onClick={handleClose1}>
        Close Modal
      </button>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid xs={12} item >Debt to Income Modal</Grid>
          </Grid>
          <Box>{instrument.DebtToEquityRatio}</Box>
       </div>
      
       
      )
    };
