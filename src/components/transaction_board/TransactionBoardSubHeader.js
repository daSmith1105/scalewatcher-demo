import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import TransactionBoardKeyContainer from './TransactionBoardKeyContainer';

const TransactionBoardSubHeader= props => {
  return (
    <Row middle="xs" style={{ marginTop: 20, marginBottom: 10 }}>
      <Col xs={12} md={6} >
        <Row start="xs" >
          <p style={{ marginLeft: 20, fontSize: 14, fontWeight: 'bold', color: 'grey' }}>Site: Demo Site</p>
        </Row>
      </Col>
      <Col xs={12} md={6}>
          <TransactionBoardKeyContainer />
      </Col>
    </Row>
  );
}

export default TransactionBoardSubHeader;
