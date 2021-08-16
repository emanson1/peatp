import React from 'react';
import {Grid, Box} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
export default function NetMarginModal (props) {
  const {modalProps, handleClose}=props;
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
      <div className='cardContainer'><Grid container className='blue'>
      <Grid item xs={1}>
    <CloseIcon className='white' onClick={handleClose}/>
    </Grid>
    <Grid item xs={10}>
         <div className='modalTitle'> {`${instrument.Title} (${instrument.Symbol})`}</div>
      </Grid>
    </Grid>
    
      <Grid className='cardContainerTitle' container direction="row" justify="center" alignItems="center">

        <Grid xs={12} item >Net Margin</Grid>
        </Grid>
        <Box style={divImage}>{instrument.NetMargin}</Box>
     </div>
    
     
    )
  };