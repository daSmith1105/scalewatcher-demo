import React from 'react';
import moment from 'moment';
import { eventTypeToIcon } from '../utilities/helper';

const EventTooltip = props => {
    const { event } = props;
    return (
        <div>
            <p style={{ margin: 10 }}>id: {event.id}</p>
            <p style={{ margin: 10 }}>transaction id: {event.bTransId}</p>
            <p style={{ margin: 10 }}>location: {event.sLocation}</p>
            <p style={{ margin: 10 }}>event type: {eventTypeToIcon(event.sEventType)} {event.sEventType}</p>
            <p style={{ margin: 10 }}>data: {event.sData}</p>
            <p style={{ margin: 10 }}>timestamp: {moment(event.dTimestamp).format('MM-DD-YYYY hh:mm:ss a')}</p>
        </div>
    )
}

export default EventTooltip;