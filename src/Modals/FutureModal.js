import React from 'react';
import {Grid, Box} from '@material-ui/core';
export default function FutureModal (props) {
  const {modalProps, handleClose}=props;
  const instrument=modalProps.instrument;
  
    return(
        <div className='cardContainer'>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item >Description</Grid>
        </Grid>
        <Box>{instrument.Future}</Box>
     </div>
    
     
    )
  };