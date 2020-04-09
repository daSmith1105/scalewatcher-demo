import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

const TableViewHeader= props => {
  return (
    <Row center="xs" around="xs" >

      <Col xs={12}>
        <Row start="xs">
          <h1 style={{ color: 'goldenrod', padding: 0, margin: 0, marginLeft: 20 }}>Table View</h1> 
        </Row>
      </Col>

    </Row>
  );
}

export default TableViewHeader;