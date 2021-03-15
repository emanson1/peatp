import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TradingViewWidget from 'react-tradingview-widget';

function  DataLayer(props) {
  const { instrument } = props;
      return (
        
        <TradingViewWidget 
        symbol={instrument.Symbol}
        autosize
        interval="D"
        hide_top_toolbar="true"
        hide_legend ="true"
        />
      );

}

export default DataLayer;
