import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Dialog } from '@material-ui/core';
import {connect} from 'react-redux';
import { propTypes } from "react-tinder-card";
import { hideModal } from '../actions/bluevilleActions';
// import ConfirmationModal from '../Pages/ConfirmationModal';
// import SucessModal from '../Pages/SucessModal';
import EarningsPerShareModal from '../Pages/EarningsPerShareModal';
import MarketCapacityModal from '../Pages/MarketCapacityModal';
import DebtToEquityRatioModal from '../Pages/DebtToEquityRatioModal';
import ResponsiblityModal from '../Pages/ResponsibilityModal';
import NetMarginModal from '../Pages/NetMarginModal';
import GrossMarginModal from '../Pages/GrossMarginModal';
import SettingsModal from '../Pages/SettingsModal';
import DashboardModal from '../Pages/DashboardModal';
import WishlistModal from '../Pages/WishlistModal';
import FutureModal from '../Pages/FutureModal';
// import MarketPlaceModal from '../Pages/MarketPlaceModal';
// import AccountModal from '../Pages/AccountModal';

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
<div>
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

