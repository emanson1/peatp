import React from 'react';
import {Grid, Box} from '@material-ui/core';
export default function ResponsibilityModal (props) {
  const {modalProps, handleClose}=props;
  const instrument=modalProps.instrument;
  
    return(
        <div className='cardContainer'>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item >Social Responsibility</Grid>
        </Grid>
        <Box>{instrument.SocialResponsibility}</Box>
     </div>
    
     
    )
  };