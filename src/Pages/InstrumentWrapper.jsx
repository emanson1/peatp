import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {showModal, hideModal} from '../actions/bluevilleActions';
import Marquee from 'react-double-marquee';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import Background from '../Images/MtnBackGround.jpg';
import PeatPLogo from '../Images/PeatPLogo.png';
const tabs = {
  // 'instrument': Instruments,
  // 'settings':  Settings,
  // 'dashboard': Dashboard
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  linkOffset:{
    paddingTop:20,
    
  },
  boxBlue:{
  backgroundColor:'#145493',
  paddingTop:30,
  paddingBottom:30,
  color:'#FFFFFF',
  textAlign:'center',
  fontSize:24,
  paddingLeft:30,
  paddingRight:30,
  height:81,
  width:121

  },
  marginTopBottom30:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    width:'100%'
  },
  linkClass:{
    fontSize:20,
    textAlign:'center'
  },
  headingClass:{
    backgroundColor:'white'
  },
 logoClass:
 {
  paddingTop:10,
  display: 'flex',
  justifyContent: 'center',
  textAlign:'center',   
  paddingBottom:10,
},
copyWhite:{
fontSize:16,
color:'white',
//textAlign:'center',
},
h2:
{
  paddingTop:30,
  textAlign:'left',
  color: '#145493',
  fontSize:20,
},
  panorama:{
    backgroundImage: `url(${Background})`
  
  },
  headingLarge:{
    paddingTop:30,
    paddingBottom:30,
    fontSize:55,
    color:'white',
    fontWeight:'bold'
  },
  headingMedium:{
   
    fontSize:45,
    fontWeight:'bold'
  },
  contactBox:{
    paddingTop:10,
    backgroundColor: '#ffcc00',
    color: '#145493',
    height:141,
    width:141,
    fontSize:30,
    display: 'flex',
    justifyContent: 'center',
    textAlign:'center',   
    fontWeight:'bold'
  },
  darkBlueBackgroundLayer:
  {
    backgroundColor:'#145493',
    color:'white'

  },
  whiteBackgroundLayer:
  {
    backgroundColor:'white',
    color:'#145493'

  }
  
}));
const InstrumentWrapper = props => {
  const {handleClose, handleOpen, rej, sel, instruments, setInstruments,setRej,setSel,setIsLoggedIn} = props;
  const classes = useStyles();
  const [value, setValue] = useState(-1);
  const [data, setData] = useState();
  const [yahooData, setYahooData] = useState();
  //const {finTechURL} = Constants;
  
  let metric = {};
  let series = {};
  
    

  useEffect(() => {
 //   setInstrumentState();
  }, []); // <-- Have to pass in [] here!

  // const handleClick = () => {
  //   setValue(-1);
  // };
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);

  //   event.stopPropagation();
  // };
  var openModal = (modalProps)=>{
    props.showModal(modalProps);
 }
  return (
    <div>
      <Grid container className={classes.headingClass}>
      <Grid item xs={3}>
      <div className={classes.logoClass}><img src={PeatPLogo}/></div></Grid>
      <Grid item xs={6}>
      <Grid container className={classes.linkOffset}>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Home</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Process</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Services</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>About</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Contact</a></Grid>
      <Grid item xs={2} className={classes.linkClass} ><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Blog</a></Grid>
      </Grid>
      <Grid container>
      <Grid item xs={12} ><h2 className={classes.h2}> Because most of your wealth is tied to your business, you need answers</h2></Grid>
      </Grid>
      
      </Grid>  
      <Grid item xs={3}><div className={classes.marginTopBottom30}><a onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}><Box className={classes.contactBox}>Call Michael</Box></a></div>
      </Grid>
      </Grid>
      <Grid container className={classes.panorama}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLoggedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container>
        <Grid item xs={9}>
          <div className={classes.headingLarge}>Do you feel ready to transition out of your business?</div>
          </Grid>
          <Grid item xs={3}>
          <div className={classes.marginTopBottom30}><div className={classes.boxBlue}>Take the Readiness Assement</div></div>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.darkBlueBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container >
        <Grid item xs={6}>
          <div><div  className={classes.headingMedium}>The Facts...</div><br/><div className={classes.copyWhite} style={{textAlign:'center'}}>80 to 90% of business owner wealth is tied to their business</div></div>
          </Grid>
          <Grid item xs={6}>
          <div><div className={classes.headingMedium}>&nbsp;</div><br/><div className={classes.copyWhite} style={{textAlign:'center'}}>48% of Boomer Business Owners plan to transition in the next 5 years</div></div>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.whiteBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container >
        <Grid item xs={2}>
          <div></div>
          </Grid>
        
        <Grid item xs={10}>
          <div><div className={classes.headingMedium}>The Tough Truth...</div>
          <div>
          <ul>
          <li>99% of business owners agreed with this statement: "Having a transition strategy is important both for my future and for the future of my business."</li>
          <li>About 50% have no plan at all​</li>
          <li>About 80% of business owners have no formal transition plan</li>
          </ul>
          </div>
          </div>
          </Grid>
          
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.whiteBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container >
        <Grid item xs={2}>
          <div></div>
          </Grid>
        
        <Grid item xs={10}>
          <div><div className={classes.headingMedium}>The Realty...</div>
          <div>
          <ul>
          <li>Baby Boomers own 65% of the private businesses in the U.S.</li>
          <li>About 4,500,000 businesses will transition​</li>
          <li>Only 30% of family-owned businesses survive into the second generation</li>
          <li>80% of businesses below $50 million put on the market do not sell (Tom West)</li>
          </ul>
          </div>
          </div>
          </Grid>
          
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.whiteBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container >
        <Grid item xs={2}>
          <div></div>
          </Grid>
        
        <Grid item xs={10}>
          <div><div className={classes.headingMedium}>Questions...</div>
          <div>
          <ul>
          <li>What is my Business Worth?</li>
          <li>What different options do I have?​</li>
          <li>How can I start this process</li>
          </ul>
          </div>
          </div>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.whiteBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container >
        <Grid item xs={2}>
          <div></div>
          </Grid>
        
        <Grid item xs={10}>
          <div>
          <i>All data above is from Exit Planning Institute unless otherwise stated.</i>
          </div>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.darkBlueBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <Grid container >
        <Grid item xs={6}>
          <div><div  className={classes.headingMedium}>The Process...</div><br/><div className={classes.copyWhite}></div></div>
          </Grid>
          <Grid item xs={6}>
          <div>
            <div className={classes.headingMedium}>&nbsp;</div><br/><div className={classes.copyWhite}>
            <ol>
              <li>Take the Readiness Assessment</li>
              <li>Exit/Transition Plan Development</li>
              <li>Exit/Transition Plan Implementation</li>
              </ol>
            </div>
          </div>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.darkBlueBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6} className={classes.copyWhite} style={{textAlign:'center'}}>
        <i>Email*: I will neither share nor sell your email address.</i>     
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
      <Grid container className={classes.whiteBackgroundLayer}>
        <Grid item xs={3}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={6}>
        <div><hr/>
        <span style={{fontSize:24,fontWeight:'bold'}}>HOW TO GET STARTED</span>
        <hr/>
        <br/>
        If you own a business or have questions about transitioning out of your business:
              or Take the Owner Readiness Assessment and then we will talk
              Michael Philipp, CEPA, CVA, BCA | Philipp Exit Planning, LLC

        </div>
        </Grid>
        <Grid item xs={3}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  modalProps: state.blueville.modalProps
});

const mapDispatchToProps = (dispatch) => ({
    showModal: (modalProps, modalTypes) => dispatch(showModal(modalProps, modalTypes)),
    hideModal: () => dispatch(hideModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(InstrumentWrapper);