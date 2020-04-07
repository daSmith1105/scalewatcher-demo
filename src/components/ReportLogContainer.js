import React from 'react';
import { Col } from 'react-flexbox-grid';
import { transactions, events } from './mockData.js';
import '../App.css';

const ReportLogContainer = props => {
    return(
        <div>
            <Col xs={12} s={12} md={12} lg={12} >

            { transactions.map( t => 
                    <div key={t.id} style={{ padding: 5, marginBottom: 5 }} >
                        <div>
                            <p>id: {t.id}</p>
                            <p>lpn: {t.sLpn}</p>
                            <p>start: {t.dStartTimestamp}</p>
                            <p>end: {t.dEndTimestamp}</p>
                            <div style={{ display: 'flex'}}>
                                {/* filter and map the events that pertain to this transaction */}
                                { events.filter( ev => ev.bTransId === t.id ).map( (ev,i) => 
                                    <div key={ev.id} >
                                        <p>id: {ev.id}</p>
                                        <p>transaction: {ev.bTransId}</p>
                                        <p>location: {ev.sLocation}</p>
                                        <p>type: {ev.sEventType}</p>
                                        <p>data: {ev.sData}</p>
                                        <p>timestamp: {ev.dTimestamp}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div> 
                )}

            </Col>
        </div>
    )
}

export default ReportLogContainer;