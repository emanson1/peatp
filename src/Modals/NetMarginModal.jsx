import React from 'react';
import {Grid, Box} from '@material-ui/core';
export default function NetMarginModal (props) {
  const {modalProps}=props;
  const instrument=modalProps.instrument;
 
    return(
        <div className='cardContainer'>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item >Net Margin</Grid>
        </Grid>
        <Box>{instrument.NetMargin}</Box>
     </div>
    
     
    )
  };