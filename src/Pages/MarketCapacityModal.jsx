import React from 'react';
import {Grid, Box} from '@material-ui/core';
export default function MarketCapacityModal (props) {
  const {modalProps, handleClose}=props;
  const instrument=modalProps.instrument;
  
    return(
        <div className='cardContainer'>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item >Market Capacity</Grid>
        </Grid>
        <Box>{instrument.MarketCapacity}</Box>
     </div>
    
     
    )
  };