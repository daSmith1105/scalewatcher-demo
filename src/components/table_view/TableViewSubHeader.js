import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const TableViewSubHeader= props => {
  return (
      <Col xs={12} >
        <Row middle="xs" start="xs" style={{ marginTop: 5, marginBottom: 5 }} >
          <p style={{ marginLeft: 20, fontSize: 10, fontWeight: 'bold', color: 'grey' }}>Ticket contains the following: ---</p>
        </Row>
        <Row middle="xs" start="xs" style={{ marginBottom: 10 }} >
          <p style={{ marginLeft: 20, fontSize: 10, fontWeight: 'bold', color: 'grey' }}>View transactions containing the following event types:</p>
        </Row>
      </Col>
  );
}

export default TableViewSubHeader;