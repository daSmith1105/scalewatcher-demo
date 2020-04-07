import React from 'react';
import AdjustIcon from '@material-ui/icons/Adjust'; // entry
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'; // ticket
import Brightness1Icon from '@material-ui/icons/Brightness1'; // exit
import WarningIcon from '@material-ui/icons/Warning'; // alert

export const eventTypeToIcon = (eventType) => {
    switch (eventType) {
        case 'TruckEntering':
            return <AdjustIcon style={{ fontSize: 12, color: 'green' }} />
        case 'TruckOn':
            return <WarningIcon style={{ fontSize: 12, color: 'orange' }} />
        case 'TicketReceived':
            return <AssignmentTurnedInIcon style={{ fontSize: 12, color: 'black' }} />
        case 'TruckLeaving':
            return <Brightness1Icon style={{ fontSize: 12, color: 'red' }} />
        default:
            return eventType;
    };
}