import React from 'react';
import {Grid} from '@material-ui/core';

export default function NavBar (props) {
const {instrument,openModal, Icon6, rej, sel}=props;
    return(
    
      <Grid className='cardLinksBottom' container direction="row" justify="center" alignItems="center">
        <Grid xs={4} item><a className='linkClassPlain'>MarketPlace</a></Grid>
        <Grid xs={4} item><a className='linkClassPlain'>Dashboard</a></Grid>
        <Grid xs={4} item><a onClick={()=>openModal({open:true, modalType:'Swiped', instrument:instrument, background:Icon6, rej:rej, sel:sel})} className='linkClassPlain'>Swiped</a></Grid>
      </Grid>
    
    )
  }