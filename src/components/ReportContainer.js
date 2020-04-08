import React from 'react';
import ReportHeader from './ReportHeader';
import ReportSubHeader from './ReportSubHeader';
import ReportRowTable from './ReportRowTable';
import { Col } from 'react-flexbox-grid';

const ReportContainer = props => {
  return (
    <Col xs={12} s={12} md={12} lg={12} style={{ border: '2px solid grey', padding: 20, borderRadius: 10 }} >
        <ReportHeader />
        <ReportSubHeader />
        <ReportRowTable toggleTooltip={ props.toggleTooltip } />
    </Col>
  );
}

export default ReportContainer;
