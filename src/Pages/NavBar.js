import React from 'react';
import {Grid} from '@material-ui/core';
export default function NavBar ({setSelectedTab}) {

    return(
    
      <Grid className='cardLinksBottom' container direction="row" justify="center" alignItems="center">
        <Grid xs={4} item><a className='linkClassPlain'>MarketPlace</a></Grid>
        <Grid xs={4} item><a className='linkClassPlain'>Dashboard</a></Grid>
        <Grid xs={4} item><a className='linkClassPlain'>Swiped</a></Grid>
      </Grid>
    
    )
  }