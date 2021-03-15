import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DescriptionIcon from '@material-ui/icons/Description';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DataLayer from '../Pages/DataLayer';



function TabPanel(props) {
  const { instrument, children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);
  const handleClick =() => {
    setValue(-1);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    event.stopPropagation();
  };

  return (
    <div className={classes.root}  onClick={(e)=>handleClick(e)}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="white"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          tabItemContainerStyle={{width: '400px'}}
          style={{background: 'blue'}}
          contentContainerStyle={{background: '#FFF'}}
        >

          <Tab  icon={<DescriptionIcon />} aria-label="Description" {...a11yProps(0)} />
          <Tab  icon={<ShowChartIcon />} aria-label="MarketCapacity" {...a11yProps(1)} />
          <Tab  icon={<PersonPinIcon />} aria-label="InstitionalOwnership" {...a11yProps(2)} />
          <Tab  icon={<HelpIcon />} aria-label="DebtToEquityRatio" {...a11yProps(3)} />
          <Tab  icon={<ShoppingBasket />} aria-label="EarningsPerShare" {...a11yProps(4)} />
          <Tab  icon={<ThumbDown />} aria-label="NetMargin" {...a11yProps(5)} />
          <Tab  icon={<ThumbUp />} aria-label="Future" {...a11yProps(6)} />
          <Tab  icon={<ThumbUp />} aria-label="SocialResponsibility" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <div className='dataLayer'><DataLayer instrument={props.instrument}></DataLayer></div>
       
      <TabPanel className="tabPanel" value={value} index={0}>
        <strong>Description<hr/>
       {props.instrument.Description}</strong>        
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={1}>
      <strong>Market Capacity<hr/>
        {props.instrument.MarketCapacity}</strong>         
      </TabPanel>
      <TabPanel className="tabPanel"  value={value} index={2}>
      <strong>Institutional Ownership<hr/>
        {props.instrument.InstitionalOwnership}</strong>         
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={3}>
      <strong> Debt To Equity Ratio<hr/>
        {props.instrument.DebtToEquityRatio}</strong> 
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={4}>
      <strong>Earnings Per Share<hr/>
        {props.instrument.EarningsPerShare}</strong> 
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={5}>
      <strong>Net Margin<hr/>
        {props.instrument.NetMargin}</strong> 
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={6}>
      <strong>Future<hr/>
        {props.instrument.Future}</strong> 
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={7}>
      <strong>Social Responsibility <hr/>
        {props.instrument.SocialResponsibility}</strong> 
      </TabPanel>
    </div>
  );
}
