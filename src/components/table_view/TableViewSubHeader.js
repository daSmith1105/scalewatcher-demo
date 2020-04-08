import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const TableViewSubHeader= props => {
  return (
      <Col xs={12} >
        <Row middle="xs" start="xs" style={{ marginTop: 20, marginBottom: 10 }} >
          <p style={{ marginLeft: 20, fontSize: 14, fontWeight: 'bold', color: 'grey' }}>Random words...</p>
        </Row>
      </Col>
  );
}

export default TableViewSubHeader;