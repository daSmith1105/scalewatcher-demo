import React from 'react';
import TransactionBoardHeader from './TransactionBoardHeader';
import TransactionBoardSubHeader from './TransactionBoardSubHeader';
import TransactionBoardTable from './TransactionBoardTable';
import { Col } from 'react-flexbox-grid';

const TransactionBoardContainer = props => {
  return (
    <Col xs={12} s={12} md={12} lg={12} style={{ border: '2px solid grey', padding: 20, borderRadius: 10 }} >
        <TransactionBoardHeader />
        <TransactionBoardSubHeader />
        <TransactionBoardTable toggleTooltip={ props.toggleTooltip } />
    </Col>
  );
}

export default TransactionBoardContainer;
