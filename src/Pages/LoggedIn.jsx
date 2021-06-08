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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <div className='cardContainer'>
     <div className='loginContainer'>
     <Box>
       <Grid container className='cardTitle'>

      <Grid item xs={2}></Grid>
        <Grid item xs={8}>Please Login:</Grid>
        <Grid item xs={2} >
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} lg={4}>
      UserName:
      </Grid>
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
        <Grid xs={12} lg={4}>
      Password:
      </Grid>
      <Grid xs={12} lg={8}>
        <Field component={FormikTextField}
        variant="outlined"
        label="Password"
        margin="dense"
        name="password"
        fullWidth 
        />
        </Grid></Grid>
        <Grid container>
        <Grid xs={12} lg={4}>
        {errors.password && touched.password && errors.password}
        <button type="submit">
          Submit
        </button>
      
      </Grid></Grid>
       
    </Box>
  </div></div>
    </View>
    </Form>
 
      )}
</Formik>)}
export default LoggedIn;
