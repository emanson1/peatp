import React from 'react';
import {Grid, Box} from '@material-ui/core';
export default function DebtToEquityRatioModal (props) {
  const {modalProps}=props;
  const instrument=modalProps.instrument;
  return(
          <div className='cardContainer'>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid xs={12} item >Debt to Equity Ratio Modal</Grid>
          </Grid>
          <Box>{instrument.DebtToEquityRatio}</Box>
       </div>
      
       
      )
    };
