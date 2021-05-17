import React from 'react';
import {Grid, Box} from '@material-ui/core';
export default function NetMarginModal (props) {
  const {modalProps}=props;
  const instrument=modalProps.instrument;
  const background=modalProps.background;
  const divImage = {
    backgroundImage: "url('" + background + "')",
    backgroundColor:'lightgray',
    backgroundSize: 'cover',    
    height:'inherit',
    border:'2px solid blue',
    fontWeight:'bold',
    padding:'30px',

  };
    return(
      <div className='cardContainer'>
      <Grid className='cardContainerTitle' container direction="row" justify="center" alignItems="center">

        <Grid xs={12} item >Net Margin</Grid>
        </Grid>
        <Box style={divImage}>{instrument.NetMargin}</Box>
     </div>
    
     
    )
  };