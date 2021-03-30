import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
export default function InstrumentWrapper(props) {
  
  
  const initialMetrics = [{ descr: '52 Week Low/High', metric1: { name: '52WeekLow', className: 'red' }, metric2: { name: '52WeekHigh', className: 'red' } }, { descr: 'BVPS Annual/Qrtly', metric1: { name: 'bookValuePerShareAnnual', className: 'conditional' }, metric2: { name: 'bookValuePerShareQuarterly', className: 'conditional' } }];
  const { instrument } = props;
  //const classes = useStyles();
  const [metrics, setMetrics] = useState({});
  const [selectedMetrics, setSelectedMetrics] = useState(initialMetrics);
  const [value, setValue] = useState(-1);
  const [data, setData] = useState();
  //const {finTechURL} = Constants;
  const finTechApiKey = "c18kb1f48v6oak5hbkl0";
  const finTechURL = "https://finnhub.io/api/v1/stock/metric?symbol={symbol}&metric=all&token=" + finTechApiKey;
  let metric = {};
  let series = {};
  React.useEffect(() => {
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

  return (
    <div>
      <Grid container>
        <Grid item xs={12} className='cardTitle'>{`${instrument.Title} (${instrument.Symbol})`}</Grid>
      </Grid>

      {/* <Grid container>
 <Grid item xs={4} className='red'> {metrics["52WeekLowDate"]}</Grid>
 <Grid item xs={4}></Grid>
 <Grid item xs={4} className='black'>{metrics["52WeekHighDate"]}</Grid>
 </Grid> */}
      {
        selectedMetrics.map((metric, index) => {
          return (
            // <div>{JSON.stringify(metric)}</div>
            <Grid key={index} container className='borderBottom'>
              <Grid item xs={4} className={metric.metric1.className !== 'conditional' ? metric.metric1.className : metrics[metric.metric1.name] < 0 ? "red" : "black"}> {metrics[metric.metric1.name]}</Grid>
              <Grid item xs={4}>{metric.descr}</Grid>
              <Grid item xs={4} className={metric.metric2.className !== 'conditional' ? metric.metric2.className : metrics[metric.metric2.name] < 0 ? "red" : "black"}>{metrics[metric.metric2.name]}</Grid>
            </Grid>
          )
        })}
      <div className='imageDiv' style={{
        backgroundImage: `url(${instrument.Icon})`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>



    </div>
  );
}
