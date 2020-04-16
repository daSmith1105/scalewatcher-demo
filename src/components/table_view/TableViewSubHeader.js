import React from 'react';
import SavedSearchSlideout from './SavedSearchSlideout';
import { Row, Col } from 'react-flexbox-grid';

const TableViewSubHeader= props => {
  return (
      <Col xs={12} style={{ margin: 0, padding: 0 }}>
        <SavedSearchSlideout />
      </Col>
  );
}

export default TableViewSubHeader;