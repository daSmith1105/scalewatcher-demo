import React from 'react';
import TransactionBoardHeader from './TransactionBoardHeader';
import TransactionBoardSubHeader from './TransactionBoardSubHeader';
import TransactionBoardTable from './TransactionBoardTable';
import { Col } from 'react-flexbox-grid';
import DataBreakoutModal from './DataBreakoutModal';

class TransactionBoardContainer extends React.Component {

  state = {
    displayBreakoutModal: false,
    currentModalTransaction: {},
    currentModalEvent: {}
  }

  showBreakoutModal = (event, transaction) => {
    this.setState({ currentModalEvent: event, currentModalTransaction: transaction, displayBreakoutModal: true })
  }

  closeBreakoutModal = () => {
    this.setState({ currentModalEvent: {}, displayBreakoutModal: false });
  }

  render() {
    return (
      <Col xs={12} s={12} md={12} lg={12} style={{ border: '2px solid grey', padding: 20, borderRadius: 10, position: 'relative' }} >
          <TransactionBoardHeader />
          <TransactionBoardSubHeader />
          <TransactionBoardTable toggleTooltip={ this.props.toggleTooltip } showBreakoutModal={ this.showBreakoutModal } displayTransactionGalleryView={ this.props.displayTransactionGalleryView } />

          { this.state.displayBreakoutModal ? 
            <div style={{ zIndex: 100, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.4)' }}>
                <DataBreakoutModal event={ this.state.currentModalEvent } 
                                   transaction={ this.state.currentModalTransaction } 
                                   displayTransactionGalleryView={ this.props.displayTransactionGalleryView } 
                                   setActiveView={ this.props.setActiveView }
                                   closeBreakoutModal={ this.closeBreakoutModal } />
            </div> :
            null
          }
      </Col>
    );
  }
}

export default TransactionBoardContainer;
