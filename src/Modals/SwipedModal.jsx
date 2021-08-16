import React, { useState } from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, withFormik } from 'formik';
import TinderCard from 'react-tinder-card';
import { TextField as FormikTextField, Select } from 'formik-material-ui';
import InstrumentWrapper from '../Pages/InstrumentWrapper';
import NavBarDetails from '../Pages/NavBarDetails';
import Description from '../Pages/Description';
import {View} from 'react-native';
import {Paper, Grid, Box} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';



function Swiped (props) {
  
  const {rej, sel} = props.modalProps;
const {handleClose}=props;
return (
  <div className='cardContainer'>
  <Grid container className='blue'>
<Grid item xs={1}>
<CloseIcon className='white' onClick={handleClose}/>
</Grid>
<Grid item xs={10}>
   <div className='modalTitle'> Swiped Instruments</div>
</Grid>
</Grid>

  <Grid className='cardContainerTitle' container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item >Activity this session</Grid>
        </Grid>

  <Grid container>
    <Grid item xs={6}><div>{rej.map((item,index)=>{return( <div key={index}>{item.Title}<br/></div>);})}</div></Grid>
    <Grid item xs={6}><div>{sel.map((item,index)=>{return( <div key={index}>{item.Title}<br/></div>);})}</div></Grid>
  </Grid>
  </div>
)
}
export default Swiped;
