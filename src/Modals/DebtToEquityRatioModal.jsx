import React from 'react';
import {Grid, Box} from '@material-ui/core';
export default function DebtToEquityRatioModal (props) {
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
const divText ={
opacity:'70%',
backgroundColor:'white',
minHeight:'380px',
padding:'20px'
}
  return(
    <div className='cardContainer'>
    <Grid className='cardContainerTitle' container direction="row" justify="center" alignItems="center">
          <Grid xs={12} item >Debt to Equity Ratio Modal</Grid>
          </Grid>
          <Box style={divImage} >
            <div style={divText}>{instrument.DebtToEquityRatio}</div></Box>
       </div>
      )
    };
