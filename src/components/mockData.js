export const transactions = [
    { id: 1, sLpn: '87GG523', dStartTimestamp: '2020-04-02 06:02:15', dEndTimestamp: '2020-04-02 06:14:15' },
    { id: 2, sLpn: '00D211W', dStartTimestamp: '2020-04-02 05:14:15', dEndTimestamp: '2020-04-02 05:30:15' },
    { id: 3, sLpn: '5XFF723', dStartTimestamp: '2020-04-02 03:38:15', dEndTimestamp: '2020-04-02 04:05:15' },
    { id: 4, sLpn: 'LL01WS1', dStartTimestamp: '2020-04-02 03:13:15', dEndTimestamp: '2020-04-02 04:05:15' },
    { id: 5, sLpn: '', dStartTimestamp: '2020-04-02 02:12:15', dEndTimestamp: '2020-04-02 02:30:15' },
    { id: 6, sLpn: '421RR8L', dStartTimestamp: '2020-04-02 02:02:15', dEndTimestamp: '2020-04-02 02:30:15' },
];

export const events = [
    { id: 2, bTransId: 6, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: '2020-04-02 02:02:15' },
    { id: 1, bTransId: 6, sLocation: 'Scale 1', sEventType: 'LprRead', sData: '421RR8L', dTimestamp: '2020-04-02 02:04:15' },
    { id: 3, bTransId: 6, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 92000', dTimestamp: '2020-04-02 02:08:15' },
    { id: 4, bTransId: 6, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1000', dTimestamp: '2020-04-02 02:28:15' },
    { id: 5, bTransId: 6, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 92000', dTimestamp: '2020-04-02 02:30:15' },
    
    { id: 7, bTransId: 1, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: '2020-04-02 06:02:15' },
    { id: 6, bTransId: 1, sLocation: 'Scale 1', sEventType: 'LprRead', sData: '87GG523', dTimestamp: '2020-04-02 06:04:15' },
    { id: 8, bTransId: 1, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 80000', dTimestamp: '2020-04-02 06:06:15' },
    { id: 9, bTransId: 1, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1023', dTimestamp: '2020-04-02 06:10:15' },
    { id: 10, bTransId: 1, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 80000', dTimestamp: '2020-04-02 06:14:15' },
  
    { id: 11, bTransId: 2, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: '2020-04-29 05:14:15' },
    { id: 12, bTransId: 2, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 100000', dTimestamp: '2020-04-02 05:18:15' },
    { id: 13, bTransId: 2, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 100000', dTimestamp: '2020-04-02 05:28:15' },
    { id: 14, bTransId: 2, sLocation: 'Scale 1', sEventType: 'NoTicket', sData: '', dTimestamp: '2020-04-02 05:29:15' },

    { id: 16, bTransId: 3, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: '2020-04-02 03:38:40' },
    { id: 15, bTransId: 3, sLocation: 'Scale 1', sEventType: 'LprRead', sData: '87GG523', dTimestamp: '2020-04-02 03:40:15' },
    { id: 17, bTransId: 3, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 83000', dTimestamp: '2020-04-02 03:50:15' },
    { id: 18, bTransId: 3, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1024', dTimestamp: '2020-04-02 03:55:15' },
    { id: 19, bTransId: 3, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 90000', dTimestamp: '2020-04-02 04:05:15' },
    { id: 30, bTransId: 3, sLocation: 'Scale 1', sEventType: 'OverWeight', sData: 'tare-weight: 83000, max-weight: 9000', dTimestamp: '2020-04-02 04:05:20' },

    { id: 21, bTransId: 4, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: '2020-04-02 03:13:15' },
    { id: 20, bTransId: 4, sLocation: 'Scale 1', sEventType: 'LprRead', sData: '87GG523', dTimestamp: '2020-04-02 03:14:15' },
    { id: 22, bTransId: 4, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 77000', dTimestamp: '2020-04-02 03:18:15' },
    { id: 23, bTransId: 4, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1033', dTimestamp: '2020-04-02 03:25:15' },
    { id: 24, bTransId: 4, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 77000', dTimestamp: '2020-04-02 03:30:15' },

    { id: 26, bTransId: 5, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: '2020-04-02 02:12:15' },
    { id: 25, bTransId: 5, sLocation: 'Scale 1', sEventType: 'LprRead', sData: 'Read Fail', dTimestamp: '2020-04-02 02:14:15' },
    { id: 27, bTransId: 5, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 79000', dTimestamp: '2020-04-02 02:18:15' },
    { id: 28, bTransId: 5, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1051', dTimestamp: '2020-04-02 02:25:15' },
    { id: 29, bTransId: 5, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 79000', dTimestamp: '2020-04-02 02:30:15' },
];

export const  tickets = [
    {}
];