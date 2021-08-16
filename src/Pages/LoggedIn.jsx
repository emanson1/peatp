import React, { useState } from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, withFormik } from 'formik';
import TinderCard from 'react-tinder-card';
import { TextField as FormikTextField, Select } from 'formik-material-ui';
import InstrumentWrapper from './InstrumentWrapper';
import NavBarDetails from './NavBarDetails';
import Description from './Description';
import {View} from 'react-native';
import {Paper, Grid, Box} from '@material-ui/core';
import Logo from '../Images/LOGO.png';




function LoggedIn (props) {
  
  const {setIsLoggedIn} = props;

const getSchema = () => {
  const yupObj=Yup.object().shape({
    email: Yup.string()
      .required("Required"),
    password: Yup.string()
      .required("Required"),

  });
  return yupObj
}
  const login = (values, setIsLoggedIn) => {
    setIsLoggedIn(true);
  };
  
  return (
    <Formik
    initialValues={{ email: '', password: '' }}
   // onSubmit={ (values)=>alert("here")}
    onSubmit={ (values)=>login(values, props.setIsLoggedIn)}
    validationSchema={getSchema()}
      >{({
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
      /* and other goodies */
    }) => (
      <Form>
    
      <div style={{backgroundColor:'white',border: '2px solid #444c4f',  borderRadius: '10px 10px 10px 10px'}}>
     <div className='cardContainer' style={{  height:'60vh', width: '90vw', backgroundImage: `url(${Logo})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'contain', backgroundPosition:'center top', textAlign:'center', minHeight:'100%', minWidth:'40vh'}} >
      <Grid container className='loginTitle'>

      <Grid item xs={2}></Grid>
        <Grid item xs={8}>Please Login:</Grid>
        <Grid item xs={2} >
        </Grid>
      </Grid>
      </div>
     <div style={{position: 'relative', bottom: '0', left: '0', width:'100%' }}>
     <Grid container>
        {/* <Grid xs={12} lg={4} style={{verticalAlign:'bottom'}}>
      User Name:
      </Grid> */}
      <Grid xs={12} lg={8}>
      <Field component={FormikTextField}
        variant="outlined"
        label="User Name"
        margin="dense"
        name="email"
        fullWidth 
        />
      </Grid>
      </Grid>
      <Grid container>
        {/* <Grid xs={12} lg={4}>
      Password:
      </Grid> */}
      <Grid xs={12} lg={8}>
        <Field component={FormikTextField}
        variant="outlined"
        label="Password"
        margin="dense"
        name="password"
        fullWidth 
        />
        </Grid>
      
      
        </Grid>
      <Grid container>
      <Grid xs={12} lg={4}>
        {values.password && values.email && !(errors.email) && 
        <div><button type="submit" style={{backgroundColor:'#49b64a', border:'0px solid #444c4f', fontWeight:'bold', width:'100%', height:'30px', color:'#444c4f', fontSize:'14pt'}}>
          Submit
        </button><br/></div>}
        <br/>
      </Grid>
      </Grid>
       </div> 
      <Grid container className='loginFoot'>
      <Grid item xs={2}></Grid>
        <Grid item xs={8}>&#169; Pinch Street LLC.</Grid>
        <Grid item xs={2} >
        </Grid>
      </Grid>   
      
      
     
     </div>
    
    </Form>
 
      )}
</Formik>)}
export default LoggedIn;
