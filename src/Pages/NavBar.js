import React from 'react';
import {Grid} from '@material-ui/core';
export default function NavBar ({setSelectedTab}) {

    return(
    
      <Grid className='cardLinksBottom' container direction="row" justify="center" alignItems="center">
        <Grid xs={4} item onClick={() => setSelectedTab('instrument')}>MarketPlace</Grid>
        <Grid xs={4} item onClick={() => setSelectedTab('settings')}>Dashboard</Grid>
        <Grid xs={4} item onClick={() => setSelectedTab('dashboard')}>Swiped</Grid>
      </Grid>
    
    )
  }