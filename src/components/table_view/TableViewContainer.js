import React from 'react';
import { Col } from 'react-flexbox-grid';
import TableViewHeader from './TableViewHeader';
import TableViewSubHeader from './TableViewSubHeader';
import TableViewTable from './TableViewTable';

const TableViewContainer = props => {
  return (
    <Col xs={12} s={12} md={12} lg={12} style={{ border: '2px solid grey', padding: 20, borderRadius: 10 }} >
        <TableViewHeader />
        <TableViewSubHeader />
        <TableViewTable x={ props.x } y={ props.y } displayTransactionGalleryView={ props.displayTransactionGalleryView } />
    </Col>
  );
}

export default TableViewContainer;
