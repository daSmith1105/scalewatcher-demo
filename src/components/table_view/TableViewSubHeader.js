import React from 'react';
import DrillDown from './DrillDown';
import { Row, Col } from 'react-flexbox-grid';

const TableViewSubHeader= props => {
  return (
      <Col xs={12} style={{ margin: 0, padding: 0 }}>
       <DrillDown />
      </Col>
  );
}

export default TableViewSubHeader;