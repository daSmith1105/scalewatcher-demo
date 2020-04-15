import moment from 'moment';
const today = moment(new Date()).format('YYYY-MM-DD');


export const transactions = [
    { id: 1, sLpn: '87GG523', dStartTimestamp: today + ' 06:02:15', dEndTimestamp: today + ' 06:14:15' },
    { id: 2, sLpn: '00D211W', dStartTimestamp: today + ' 05:14:15', dEndTimestamp: today +' 05:30:15' },
    { id: 3, sLpn: '5XFF723', dStartTimestamp: today + ' 03:38:15', dEndTimestamp: today +' 04:05:15' },
    { id: 4, sLpn: 'LL01WS1', dStartTimestamp: today + ' 03:13:15', dEndTimestamp: today +' 04:05:15' },
    { id: 5, sLpn: 'timeout', dStartTimestamp: today + ' 02:12:15', dEndTimestamp: today +' 02:30:15' },
    { id: 6, sLpn: '421RR8L', dStartTimestamp: today + ' 02:02:15', dEndTimestamp: today +' 02:30:15' },
];

export const events = [
    { id: 2, bTransId: 6, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: today + ' 02:02:15' },
    { id: 1, bTransId: 6, sLocation: 'Scale 1', sEventType: 'LprRead', sData: '421RR8L', dTimestamp: today + ' 02:04:15' },
    { id: 3, bTransId: 6, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 92000', dTimestamp: today + ' 02:08:15' },
    { id: 4, bTransId: 6, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1004', dTimestamp: today + ' 02:28:15' },
    { id: 5, bTransId: 6, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 92000', dTimestamp: today + ' 02:30:15' },
    
    { id: 7, bTransId: 1, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: today + ' 06:02:15' },
    { id: 6, bTransId: 1, sLocation: 'Scale 1', sEventType: 'LprRead', sData: '87GG523', dTimestamp: today + ' 06:04:15' },
    { id: 8, bTransId: 1, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 80000', dTimestamp: today + ' 06:06:15' },
    { id: 9, bTransId: 1, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1003', dTimestamp: today + ' 06:10:15' },
    { id: 10, bTransId: 1, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 80000', dTimestamp: today + ' 06:14:15' },
  
    { id: 11, bTransId: 2, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: today + ' 05:14:15' },
    { id: 12, bTransId: 2, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 100000', dTimestamp: today + ' 05:18:15' },
    { id: 13, bTransId: 2, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 100000', dTimestamp: today + ' 05:28:15' },
    { id: 14, bTransId: 2, sLocation: 'Scale 1', sEventType: 'NoTicket', sData: '', dTimestamp: today + ' 05:29:15' },

    { id: 16, bTransId: 3, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: today + ' 03:38:40' },
    { id: 15, bTransId: 3, sLocation: 'Scale 1', sEventType: 'LprRead', sData: '5XFF723', dTimestamp: today + ' 03:40:15' },
    { id: 17, bTransId: 3, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 83000', dTimestamp: today + ' 03:50:15' },
    { id: 18, bTransId: 3, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1002', dTimestamp: today + ' 03:55:15' },
    { id: 19, bTransId: 3, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 90000', dTimestamp: today + ' 04:05:15' },
    { id: 30, bTransId: 3, sLocation: 'Scale 1', sEventType: 'OverWeight', sData: 'max-weight: 9000, limit-weight: 85000', dTimestamp: today + ' 04:05:20' },

    { id: 21, bTransId: 4, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: today + ' 03:13:15' },
    { id: 20, bTransId: 4, sLocation: 'Scale 1', sEventType: 'LprRead', sData: 'LL01WS1', dTimestamp: today + ' 03:14:15' },
    { id: 22, bTransId: 4, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 77000', dTimestamp: today + ' 03:18:15' },
    { id: 23, bTransId: 4, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1001', dTimestamp: today + ' 03:25:15' },
    { id: 24, bTransId: 4, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 77000', dTimestamp: today + ' 03:30:15' },

    { id: 26, bTransId: 5, sLocation: 'Scale 1', sEventType: 'TruckEntering', sData: '', dTimestamp: today + ' 02:12:15' },
    { id: 25, bTransId: 5, sLocation: 'Scale 1', sEventType: 'LprRead', sData: 'Read Fail', dTimestamp: today + ' 02:14:15' },
    { id: 27, bTransId: 5, sLocation: 'Scale 1', sEventType: 'TruckOn', sData: 'tare-weight: 79000', dTimestamp: today + ' 02:18:15' },
    { id: 28, bTransId: 5, sLocation: 'Scale 1', sEventType: 'TicketReceived', sData: 'ticket: 1000', dTimestamp: today + ' 02:25:15' },
    { id: 29, bTransId: 5, sLocation: 'Scale 1', sEventType: 'TruckLeaving', sData: 'max-weight: 79000', dTimestamp: today + ' 02:30:15' },
];

export const tickets = [
    {
        id: 1000,
        order: 'M54221',
        batch: 'LT808',
        plant: '54510',
        customer:'390972 CORSICANA YARD-CREDIT CARD',
        carrier: '',
        truck: 'm15',
        product: '2938 YARD SCRAP',
        location: 'Scale 1',
        gross: '42880',
        tare: '18520',
        net: '24360',
        images: '',
        timestamp: today + ' 02:25:15'
    },
    {
        id: 1001,
        order: 'M54221',
        batch: 'LT808',
        plant: '54510',
        customer:'390972 CORSICANA YARD-CREDIT CARD',
        carrier: '',
        truck: 'm15',
        product: '2938 YARD SCRAP',
        location: 'Scale 1',
        gross: '42880',
        tare: '18520',
        net: '24360',
        image: '',
        timestamp: today + ' 03:25:15'
    },
    {
        id: 1002,
        order: 'M54221',
        batch: 'LT808',
        plant: '54510',
        customer:'390972 CORSICANA YARD-CREDIT CARD',
        carrier: '',
        truck: 'm15',
        product: '2938 YARD SCRAP',
        location: 'Scale 1',
        gross: '42880',
        tare: '18520',
        net: '24360',
        image: '',
        timestamp: today + ' 03:55:15'
    },
    {
        id: 1003,
        order: 'M54221',
        batch: 'LT808',
        plant: '54510',
        customer:'390972 CORSICANA YARD-CREDIT CARD',
        carrier: '',
        truck: 'm15',
        product: '2938 YARD SCRAP',
        location: 'Scale 1',
        gross: '42880',
        tare: '18520',
        net: '24360',
        image: '',
        timestamp: today + ' 06:10:15'
    },
    {
        id: 1004,
        order: 'M54221',
        batch: 'LT808',
        plant: '54510',
        customer:'390972 CORSICANA YARD-CREDIT CARD',
        carrier: '',
        truck: 'm15',
        product: '2938 YARD SCRAP',
        location: 'Scale 1',
        gross: '42880',
        tare: '18520',
        net: '24360',
        image: '',
        timestamp: today + ' 02:28:15'
    },
];

export const eventTypes = [
    // alerts / reports
    { name: 'ValveTimeout' },
    { name: 'NoTicket' },
    { name: 'OverWeight' },
    { name: 'LoadFinished' },
    { name: 'ScaleConnectionLost' },
    { name: 'TareWeightContamination' },
    { name: 'InboundException' },
    { name: 'TicketCount' },
    { name: 'ScaleConnectionRestored' },
    { name: 'WeightMismatch' },
    { name: 'LoadingStart' },
    // scale 
    { name: 'TruckEntering' },
    { name: 'TruckOn' },
    { name: 'TruckLeaving' },
    // lpr
    { name: 'LprRead' },
    // valve
    { name: 'ValveOpen' },
    { name: 'ValveClose' }
];