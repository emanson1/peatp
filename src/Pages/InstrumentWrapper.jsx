import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {showModal, hideModal} from '../actions/bluevilleActions';
import Marquee from 'react-double-marquee';
import NavBar from './NavBar';
import { connect } from 'react-redux';

const tabs = {
  // 'instrument': Instruments,
  // 'settings':  Settings,
  // 'dashboard': Dashboard
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const InstrumentWrapper = props => {
  const {handleClose, handleOpen} = props;
  const classes = useStyles();
  const initialMetrics = [{ descr: '52 Week Low/High', metric1: { name: '52WeekLow', className: 'red' }, metric2: { name: '52WeekHigh', className: 'red' } }, { descr: 'BVPS Annual/Qrtly', metric1: { name: 'bookValuePerShareAnnual', className: 'conditional' }, metric2: { name: 'bookValuePerShareQuarterly', className: 'conditional' } }];
  const finTechApiKey = "c18kb1f48v6oak5hbkl0";
  const finTechURL = "https://finnhub.io/api/v1/stock/metric?symbol={symbol}&metric=all&token=" + finTechApiKey;
 // const {modalProps, setModalProps} = useState({open:false});
  const { instrument } = props;
  //const classes = useStyles();
  const [metrics, setMetrics] = useState({});
  const [selectedMetrics, setSelectedMetrics] = useState(initialMetrics);
  const [value, setValue] = useState(-1);
  const [data, setData] = useState();
  //const {finTechURL} = Constants;
  
  let metric = {};
  let series = {};
  useEffect(() => {
    fetch(finTechURL.toString().replace('{symbol}', instrument.Symbol))
      .then(results => results.json())
      .then(data => {
        setData(data);
        setMetrics(data.metric);
   
      });
  }, []); // <-- Have to pass in [] here!

  const handleClick = () => {
    setValue(-1);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    event.stopPropagation();
  };
  var testModal = (modalProps)=>{
    props.showModal(modalProps);
 }
  return (
    instrument !== undefined && instrument !==null &&
    <React.Fragment>
      <Grid container className='cardTitle'>
      <Grid item xs={2} className='linkClass'><a  onClick={()=>testModal({open:true, modalType:'Wishlist', instrument:instrument})}>Wishlist</a></Grid>
        <Grid item xs={8}>{`${instrument.Title} (${instrument.Symbol})`}</Grid>
        <Grid item xs={2} className='linkClass'>Account</Grid>
      </Grid>
      <div className='imageDiv' style={{
      backgroundImage: `url(${instrument.Icon})`,
      backgroundPosition: 'center',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat'
    }}><div
    style={{
      width: '100%',
      whiteSpace: 'nowrap',
      opacity: '.3',
      position: 'relative',
      top:'180px',
      background:'white'
    }}><Marquee scrollWHen={'always'} direction={'left'}>{
      selectedMetrics.map((metric, index) => {
        return (
      <React.Fragment><span style={{paddingLeft:'15px',fontWeight:'bold',textAlign:'center'}}>{metric.descr}&nbsp;&nbsp;</span><span style={{fontWeight:'bold',color:'red'}}>{metrics[metric.metric1.name]}/{metrics[metric.metric2.name]}</span></React.Fragment>
        )
      })}

</Marquee>

    </div>
    <Grid container direction='row' className='linkClassRow'>
  <Grid item xs={2}><div className='linkClass'><a  onClick={()=>testModal({open:true, modalType:'DebtToEquityRatio', instrument:instrument})}>Debt/Inc</a></div></Grid>
  <Grid item xs={2}><div className='linkClass'><a  onClick={()=>testModal({open:true, modalType:'MarketCapacity', instrument:instrument})}>Market Cap</a></div></Grid>
  <Grid item xs={2}><div className='linkClass'><a  onClick={()=>testModal({open:true, modalType:'NetMargin', instrument:instrument})}>Net Margin</a></div></Grid>
  <Grid item xs={2}><div className='linkClass'><a  onClick={()=>testModal({open:true, modalType:'Future', instrument:instrument})}>Future</a></div></Grid>
  <Grid item xs={2}><div className='linkClass'><a  onClick={()=>testModal({open:true, modalType:'Earnings', instrument:instrument})}>Earnings</a></div></Grid>
  <Grid item xs={2}><div className='linkClass'><a  onClick={()=>testModal({open:true, modalType:'Responsiblity', instrument:instrument})}>Social Resp</a></div></Grid>
</Grid>
      </div> 
      <div style={{position:'relative',top:'28px',height:'240px',overflowY:'hidden'}}>{instrument.Description}</div>
      <NavBar style={{position:'relative',top:'550px'}}/>
  
      </React.Fragment>
    

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