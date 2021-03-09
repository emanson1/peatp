import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="white"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >

          <Tab style={{width:"20px"}} icon={<PhoneIcon />} aria-label="Description" {...a11yProps(0)} />
          <Tab className="tabClass" icon={<FavoriteIcon />} aria-label="MarketCapacity" {...a11yProps(1)} />
          <Tab className="tabClass" icon={<PersonPinIcon />} aria-label="InstitionalOwnership" {...a11yProps(2)} />
          <Tab className="tabClass" icon={<HelpIcon />} aria-label="DebtToEquityRatio" {...a11yProps(3)} />
          <Tab className="tabClass" icon={<ShoppingBasket />} aria-label="EarningsPerShare" {...a11yProps(4)} />
          <Tab className="tabClass" icon={<ThumbDown />} aria-label="NetMargin" {...a11yProps(5)} />
          <Tab className="tabClass" icon={<ThumbUp />} aria-label="Future" {...a11yProps(6)} />
          <Tab className="tabClass" icon={<ThumbUp />} aria-label="SocialResponsibility" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel className="tabPanel" value={value} index={0}>
        Description<hr/>
       {props.instrument.Description}        
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={1}>
        Market Capacity<hr/>
        {props.instrument.MarketCapacity}        
      </TabPanel>
      <TabPanel className="tabPanel"  value={value} index={2}>
        Institutional Ownership<hr/>
        {props.instrument.InstitionalOwnership}        
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={3}>
        Debt To Equity Ratio<hr/>
        {props.instrument.DebtToEquityRatio}
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={4}>
        Earnings Per Share<hr/>
        {props.instrument.EarningsPerShare}
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={5}>
        Net Margin<hr/>
        {props.instrument.NetMargin}
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={6}>
        Future<hr/>
        {props.instrument.Future}
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={7}>
        Social Responsibility <hr/>
        {props.instrument.SocialResponsibility}
      </TabPanel>
    </div>
  );
}
