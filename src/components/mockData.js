export const transactions = [
    { id: 1, sLpn: '87GG523', dStartTimestamp: '2020-04-02 15:04:15', dEndTimestamp: '2020-04-02 15:14:15' },
    { id: 2, sLpn: '00D211W', dStartTimestamp: '2020-04-02 16:14:15', dEndTimestamp: '2020-04-02 16:30:15' },
    { id: 3, sLpn: '5XFF723', dStartTimestamp: '2020-04-02 16:14:15', dEndTimestamp: '2020-04-02 16:30:15' },
    { id: 4, sLpn: 'LL01WS1', dStartTimestamp: '2020-04-02 16:14:15', dEndTimestamp: '2020-04-02 16:30:15' },
    { id: 5, sLpn: 'ABC4351', dStartTimestamp: '2020-04-02 16:14:15', dEndTimestamp: '2020-04-02 16:30:15' },
    { id: 6, sLpn: 'R30P554', dStartTimestamp: '2020-04-02 16:14:15', dEndTimestamp: '2020-04-02 16:30:15' },
    { id: 7, sLpn: '885FR4E', dStartTimestamp: '2020-04-02 16:14:15', dEndTimestamp: '2020-04-02 16:30:15' },
    { id: 8, sLpn: '0PJ43G1', dStartTimestamp: '2020-04-02 16:14:15', dEndTimestamp: '2020-04-02 16:30:15' },
    { id: 9, sLpn: 'PDE231W', dStartTimestamp: '2020-04-02 16:14:15', dEndTimestamp: '2020-04-02 16:30:15' },
    { id: 10, sLpn: '123RS22', dStartTimestamp: '2020-04-02 16:14:15', dEndTimestamp: '2020-04-02 16:30:15' },
];

export const events = [
    { id: 1, bTransId: 1, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: '2020-04-02 15:04:15' },
    { id: 2, bTransId: 1, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 80000', dTimestamp: '2020-04-02 15:06:15' },
    { id: 3, bTransId: 1, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1000', dTimestamp: '2020-04-02 15:10:15' },
    { id: 4, bTransId: 1, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 80000', dTimestamp: '2020-04-02 15:14:15' },
  
    { id: 5, bTransId: 2, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: '2020-04-29 16:14:15' },
    { id: 6, bTransId: 2, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 80000', dTimestamp: '2020-04-02 16:18:15' },
    { id: 7, bTransId: 2, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1000', dTimestamp: '2020-04-02 16:25:15' },
    { id: 8, bTransId: 2, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 80000', dTimestamp: '2020-04-02 16:30:15' },

    { id: 9, bTransId: 3, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: '2020-04-29 16:14:15' },
    { id: 10, bTransId: 3, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 80000', dTimestamp: '2020-04-02 16:18:15' },
    { id: 11, bTransId: 3, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1000', dTimestamp: '2020-04-02 16:25:15' },
    { id: 12, bTransId: 3, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 80000', dTimestamp: '2020-04-02 16:30:15' },

    { id: 13, bTransId: 4, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: '2020-04-29 16:14:15' },
    { id: 14, bTransId: 4, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 80000', dTimestamp: '2020-04-02 16:18:15' },
    { id: 15, bTransId: 4, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1000', dTimestamp: '2020-04-02 16:25:15' },
    { id: 16, bTransId: 4, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 80000', dTimestamp: '2020-04-02 16:30:15' },

    { id: 17, bTransId: 5, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: '2020-04-29 16:14:15' },
    { id: 18, bTransId: 5, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 80000', dTimestamp: '2020-04-02 16:18:15' },
    { id: 19, bTransId: 5, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1000', dTimestamp: '2020-04-02 16:25:15' },
    { id: 20, bTransId: 5, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 80000', dTimestamp: '2020-04-02 16:30:15' },
];

// 1 | “” | 20200402080000 | 20200402080500

// these events would be in a secondary table and be pulled in using the transaction id
// 1 | 1 | “Scale 1” | “TruckEntering” | “” | 20200402080000
// 2 | 1 | “Scale 1” | “TruckOn” | “tare-weight: 80000” | 20200402080030
// 3 | 1 | “Scale 1” | “TicketReceived” | “ticket: 1000” | 20200402080100
// 4 | 1 | “Scale 1” | TruckLeaving” | “max-weight: 80000” | 20200402080500