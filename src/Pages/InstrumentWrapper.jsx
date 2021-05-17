import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {showModal, hideModal} from '../actions/bluevilleActions';
import Marquee from 'react-double-marquee';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import FIconBankMoney from '../Images/FIconBankMoney.png';
import FIconBlockPyramid from '../Images/FIconBlockPyramid.png';
import FIconCoinDollarSign from '../Images/FIconCoinDollarSign.png';
import FIconCalculator from '../Images/FIconCalculator.png';
import FIconDiamond from '../Images/FIconDiamond.png';
import FIconGavel from '../Images/FIconGavel.png';
import FIconMoneyBag from '../Images/FIconMoneyBag.png';
import FIconPiggyBank from '../Images/FIconPiggyBank.png';
import FIconScales from '../Images/FIconScales.png';
import FIconTrendDown from '../Images/FIconTrendDown.png';
import FIconTrendGraph from '../Images/FIconTrendGraph.png';
import FIconTrendUp from '../Images/FIconTrendUp.png';
import FIconUmbrella from '../Images/FIconUmbrella.png';
import FIconUpDown from '../Images/FIconUpDown.png';
import Icon1 from '../Images/Icon 1.png';
import Icon2 from '../Images/Icon 2.png';
import Icon3 from '../Images/Icon 3.png';
import Icon4 from '../Images/Icon 4.png';
import Icon5 from '../Images/Icon 5.png';
import Icon6 from '../Images/Icon 6.png';
import Icon7 from '../Images/Icon 7.png';
import Icon8 from '../Images/Icon 8.png';
import Icon9 from '../Images/Icon 9.png';
import Icon10 from '../Images/Icon 10.png';
import Icon11 from '../Images/Icon 11.png';
import Icon12 from '../Images/Icon 12.png';
import Icon13 from '../Images/Icon 13.png';
import Icon14 from '../Images/Icon 14.png';
import Icon15 from '../Images/Icon 15.png';
import Icon16 from '../Images/Icon 16.png';

import Sample from '../Images/Sample.png';

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
  const yahooApiKey="{'x-rapidapi-key': 'c4ec02c063msheb9801e4d3fbff0p1b74b2jsn0620426f7540','x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'}";
  const yahooURL="https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol={symbol}&region=US";
  var options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
    params: {symbol: 'AMRN', region: 'US'},
    headers: {
      'x-rapidapi-key': 'c4ec02c063msheb9801e4d3fbff0p1b74b2jsn0620426f7540',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };
  
  
  const finTechApiKey = "c18kb1f48v6oak5hbkl0";
  const finTechURL = "https://finnhub.io/api/v1/stock/metric?symbol={symbol}&metric=all&token=" + finTechApiKey;
 // const {modalProps, setModalProps} = useState({open:false});
  const { instrument } = props;
  //const classes = useStyles();
  const [metrics, setMetrics] = useState({});
  const [selectedMetrics, setSelectedMetrics] = useState(initialMetrics);
  const [value, setValue] = useState(-1);
  const [data, setData] = useState();
  const [yahooData, setYahooData] = useState();
  //const {finTechURL} = Constants;
  
  let metric = {};
  let series = {};
  
  async function setInstrumentState(){
    await fetch(finTechURL.toString().replace('{symbol}', instrument.Symbol)).then(results => results.json())
    .then(data => {setData(data); setMetrics(data.metric);});

    await fetch(yahooURL.toString().replace('{symbol}', instrument.Symbol), 
    {"method": "GET",
	    "headers": {
		"x-rapidapi-key": "c4ec02c063msheb9801e4d3fbff0p1b74b2jsn0620426f7540",
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
})
.then(response => {
	setYahooData(response);
})
.catch(err => {
	console.error(err);
});
    
}
  useEffect(() => {
    setInstrumentState();
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
      <Grid item xs={2} className='linkClassPlain'><a  onClick={()=>testModal({open:true, modalType:'Wishlist', instrument:instrument})}>Wishlist</a></Grid>
        <Grid item xs={8}>{`${instrument.Title} (${instrument.Symbol})`}</Grid>
        <Grid item xs={2} className='linkClassPlain'>Account</Grid>
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

</Marquee></div>
<div   className='linkClassRow' >
  <div className='linkClassContainer'>
  <Grid container direction='row'>
  <Grid item xs={2}><div><a  onClick={()=>testModal({open:true, modalType:'DebtToEquityRatio', instrument:instrument, background:Icon1})}><img className='linkClass' src={Icon1} alt='Debt/Inc' title='Debt/Inc'/></a></div></Grid>
  <Grid item xs={2}><div><a  onClick={()=>testModal({open:true, modalType:'MarketCapacity', instrument:instrument, background:Icon2})}><img className='linkClass' src={Icon2} alt='Market Capitalization' title='Market Capitalization'/></a></div></Grid>
  <Grid item xs={2}><div><a  onClick={()=>testModal({open:true, modalType:'NetMargin', instrument:instrument, background:Icon3})}><img className='linkClass' src={Icon3} alt='Net Margin' title='Net MArgin'/></a></div></Grid>
  <Grid item xs={2}><div><a  onClick={()=>testModal({open:true, modalType:'Future', instrument:instrument, background:Icon4})}><img className='linkClass' src={Icon4} alt='Future' title='Future'/></a></div></Grid>
  <Grid item xs={2}><div><a  onClick={()=>testModal({open:true, modalType:'EarningsPerShare', instrument:instrument, background:Icon5})}><img className='linkClass' src={Icon5} alt='Earnings' title='Earnings'/></a></div></Grid>
  <Grid item xs={2}><div><a  onClick={()=>testModal({open:true, modalType:'Responsiblity', instrument:instrument, background:Icon6})}><img className='linkClass' src={Icon6} alt='Social Responsiblity' title='Social Responsibility'/></a></div></Grid>
</Grid>
</div>
<div className='descriptionRow'>{instrument.Description}</div>
<NavBar /> 
    </div>
    </div>
      

      
  
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