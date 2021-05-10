import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog,Grid } from '@material-ui/core';
import {connect} from 'react-redux';
import { hideModal } from '../actions/bluevilleActions';
import EarningsPerShareModal from '../Modals/EarningsPerShareModal';
import MarketCapacityModal from '../Modals/MarketCapacityModal';
import DebtToEquityRatioModal from '../Modals/DebtToEquityRatioModal';
import ResponsiblityModal from '../Modals/ResponsibilityModal';
import NetMarginModal from '../Modals/NetMarginModal';
import GrossMarginModal from '../Modals/GrossMarginModal';
import SettingsModal from '../Modals/SettingsModal';
import DashboardModal from '../Modals/DashboardModal';
import WishlistModal from '../Modals/WishlistModal';
import FutureModal from '../Modals/FutureModal';
import CloseIcon from '@material-ui/icons/Close';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const Modals= {
  //   confirmationModal:ConfirmationModal,
  //   successModal:SucessModal,
  //   errorModal: ErrorModal,
       EarningsPerShare: EarningsPerShareModal,
       Future: FutureModal,
       MarketCapacity:MarketCapacityModal,
       DebtToEquityRatio: DebtToEquityRatioModal,
       Responsiblity: ResponsiblityModal,
       NetMargin: NetMarginModal,
       GrossMargin: GrossMarginModal,
       Settings: SettingsModal,
       Dashboard: DashboardModal,
       Wishlist: WishlistModal,
  //   marketPlace:MarketPlaceModal,
  //   swiped: SwipedModal,
  //   account: AccountModal
   };
   
 
const ModalRoot = props => {
  const modalProps=props.modalProps;
  const modalType=props.modalType;
  const instrument=props.modalProps.instrument;
  const SpecificModal = Modals[modalType];
 
 const classes = makeStyles();
// getModalStyle is not a pure function, we roll the style only on the first render




return (
//   <div>
   
//     <Modal
//       open={props.open}
//       onClose={props.handleClose}
//       aria-labelledby="simple-modal-title"
//       aria-describedby="simple-modal-description"
//     >
// <div>

// </div>

//     </Modal>
//   </div>

// <div>
//</div>   
<Dialog
  open={props.open}
  onClose={props.handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
<div className='modalRoot'>

<Grid container className='blue'>
  <Grid item xs={1}>
<CloseIcon onClick={props.hideModal}/>
</Grid>
<Grid item xs={10}>
     <div className='modalTitle'> {`${instrument.Title} (${instrument.Symbol})`}</div>
  </Grid>
</Grid>
<SpecificModal handleClose={props.hideModal} modalProps={modalProps}/>
</div>
</Dialog>

);
}

const mapStateToProps = (state) => ({
  modalProps: state.blueville.modalProps,
  modalType: state.blueville.modalProps.modalType,
});

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);

