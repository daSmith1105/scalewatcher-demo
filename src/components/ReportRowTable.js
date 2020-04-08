import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css'
import { transactions, events } from './mockData.js';
import moment from 'moment';
import '../App.css'
import Brightness1Icon from '@material-ui/icons/Brightness1'; // lpr
import PlayArrowIcon from '@material-ui/icons/PlayArrow'; // scale
import WarningIcon from '@material-ui/icons/Warning'; // alert
import StopIcon from '@material-ui/icons/Stop'; // ticket
import GradeIcon from '@material-ui/icons/Grade'; // valve
import HelpIcon from '@material-ui/icons/Help'; // unknown

const data =  transactions.map( t => (
    {
        tId: t.id,
        lpn: t.sLpn,
        start: t.dStartTimestamp,
        end: t.dEndTimestamp,
        complete: t.dStartTimestamp.length > 0 && t.dEndTimestamp.length > 0 ? true : false,
        events:  events.filter( ev => ev.bTransId === t.id ).map( (ev) => (
            {
                eId: ev.id,
                tId: ev.bTransId,
                location: ev.sLocation,
                type: ev.sEventType,
                data: ev.sData,
                timestamp: ev.dTimestamp,
                isStart: ev.dTimestamp === t.dStartTimestamp,
                isEnd: ev.dTimestamp === t.dEndTimestamp,
                eHour: parseInt(moment(ev.dTimestamp).format('HH')),
                eMinute: roundDown5( parseInt(moment(ev.dTimestamp).format('mm') ))
            }
        ))
            
    }
))

    // round number down to nearest increment of 5 for display correctly on timeline/in table
    function roundDown5(x)
    {
        return Math.floor(x/5)*5;
    }


class TableTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // get the mouse coordinates so we can display event tooltip near mouse
            x: 0,
            y: 0,
            showTooltip: false,
            currentTooltipEvent: {},
            currentModalEvent: {}, 
            showEventModal: true 
        }
        this.columns = [{
            Header: 'Lpn',
            accessor: 'lpn',
            width: 100,
            className: "sticky",
            headerClassName: "sticky"
        }, {
            id: '12am',
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>12am</span>,
            accessor: d => d.events,
            width: 38,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '00', '00', '04')
        }, {
            id: '12:05am',
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '00', '05', '09')
        }, {
            id: '12:10am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '00', '10', '14')
        }, {
            id: '12:15am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '00', '15', '19')
        }, {
            id: '12:20am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '00', '20', '24')
        }, {
            id: '12:25am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '00', '25', '29')
        }, {
            id: '12:30am',
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '00', '30', '34')
        }, {
            id: '12:35am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '00', '35', '39')
        }, {
            id: '12:40am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '00', '40', '44')
        }, {
            id: '12:45am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '00', '45', '49')
        }, {
            id: '12:50am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '00', '50', '54')
        }, {
            id: '12:55am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '00', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>1am</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '01', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '01', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '01', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '01', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '01', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '01', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '01', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '01', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '01', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '01', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '01', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '01', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>2am</span>,
            accessor: 'id',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '02', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '02', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '02', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '02', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '02', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '02', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '02', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '02', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '02', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '02', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '02', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '02', '55', '59')
        }, {
            id: '3am',
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>3am</span>,
            accessor: d => d.events,
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '03', '00', '04')
        }, {
            id: '3:05am',
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: d => d.events,
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '03', '05', '9')
        }, {
            id: '3:10am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: d => d.events,
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '03', '10', '14')
        }, {
            id: '3:15am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: d => d.events,
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '03', '15', '19')
        }, {
            id: '3:20am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: d => d.events,
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '03', '20', '24')
        }, {
            id: '3:25am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: d => d.events,
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '03', '25', '29')
        }, {
            id: '3:30am',
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: d => d.events,
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '03', '30', '34')
        }, {
            id: '3:35am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: d => d.events,
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '03', '35', '39')
        }, {
            id: '3:40am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: d => d.events,
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '03', '40', '44')
        }, {
            id: '3:45am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: d => d.events,
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '03', '45', '49')
        }, {
            id: '3:50am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            aaccessor: d => d.events,
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '03', '50', '54')
        }, {
            id: '3:55am',
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: d => d.events,
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '03', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>4am</span>,
            accessor: 'id',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '04', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '04', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '04', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '04', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '04', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '04', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '04', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '04', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '04', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '04', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '04', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '04', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>5am</span>,
            accessor: 'id',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '05', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '05', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '05', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '05', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '05', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '05', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '05', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '05', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '05', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '05', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '05', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '05', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>6am</span>,
            accessor: 'id',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '06', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '06', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '06', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '06', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '06', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '06', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '06', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '06', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '06', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '06', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '06', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '06', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>7am</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '07', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '07', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '07', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '07', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '07', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '07', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '07', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '07', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '07', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '07', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '07', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '07', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>8am</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '08', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '08', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '08', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '08', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '08', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '08', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '08', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '08', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '08', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '08', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '08', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '08', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>9am</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '09', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '09', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '09', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '09', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '09', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '09', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '09', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            Cell: row => this.parseRowEvents(row.original.events, '09', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '09', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '09', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '09', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '09', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>10am</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '10', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '10', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '10', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '10', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '10', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '10', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '10', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '10', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '10', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '10', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '10', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '10', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>11am</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '11', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '11', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '11', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '11', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '11', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '11', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '11', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '11', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '11', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '11', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '11', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '11', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>12pm</span>,
            accessor: 'id',
            width: 38,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '12', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '12', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '12', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '12', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '12', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '12', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '12', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '12', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '12', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '12', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '12', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '12', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>1pm</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '13', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '13', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '13', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '13', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '13', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '13', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '13', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '13', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '13', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '13', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '13', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '13', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>2pm</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '14', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '14', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '14', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '14', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '14', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '14', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '14', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '14', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '14', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '14', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '14', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '14', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>3pm</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '15', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '15', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '15', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '15', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '15', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '15', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '15', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '15', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '15', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '15', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '15', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '15', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>4pm</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '16', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '16', '05', '0')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '16', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '16', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '16', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '16', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '16', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '16', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '16', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '16', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '16', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '16', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>5pm</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '17', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '17', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '17', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '17', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '17', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '17', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '17', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '17', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '17', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '17', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '17', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '17', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>6pm</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '18', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '18', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '18', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '18', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '18', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '18', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '18', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '18', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '18', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '18', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '18', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '18', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>7pm</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '19', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '19', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '19', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '19', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '19', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '19', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '19', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '19', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '19', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '19', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '19', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '19', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>8pm</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '20', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '20', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '20', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '20', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '20', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '20', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '20', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '20', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '20', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '20', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '20', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '20', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>9pm</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '21', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '21', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '21', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '21', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '21', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '21', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '21', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '21', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '21', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '21', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '21', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '21', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>10pm</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '22', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '22', '05', '09')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '22', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '22', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '22', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '22', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '22', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '22', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '22', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '22', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '22', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '22', '55', '59')
        }, {
            Header: <span style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>11pm</span>,
            accessor: 'id',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '23', '00', '04')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey'}}>:05</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '23', '05', '9')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:10</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '23', '10', '14')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:15</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '23', '15', '19')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:20</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '23', '20', '24')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:25</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '23', '25', '29')
        }, {
            Header: <span style={{ fontSize: 10, color: 'black' }}>:30</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '23', '30', '34')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:35</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '23', '35', '39')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:40</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '23', '40', '44')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:45</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '23', '45', '49')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:50</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '23', '50', '54')
        }, {
            Header: <span style={{ fontSize: 8, color: 'grey' }}>:55</span>,
            accessor: 'events',
            width: 36,
            show: false,
            Cell: row => this.parseRowEvents(row.original.events, '23', '55', '59')
          
          }];
    }

    showEventModal = (data) => {
        this.setState({ currentModalEvent: data, showEventModal: true })
    }

    parseRowEvents = ( rowEvents, hour, minuteStart, minuteEnd ) => {
        let g = [];
        // split all events by time stamop and set to state
        rowEvents.forEach( ev => {
            const momentHour = moment(ev.timestamp).format('HH')
            const momentMinute = moment(ev.timestamp).format('mm');
            if( ( momentHour === hour ) &&  ( parseInt(momentMinute) >= parseInt(minuteStart) &&  parseInt(momentMinute) <= parseInt(minuteEnd) ) ) {
              g.push(ev)
            };
          })
    
      return( <div className="event-icon" style={{ width: '100%', display: 'flex',  alignItems: 'center', justifyContent: 'space-around' }}>
                  {/* will return icon with onClick props of the event */}
                  { g.length > 0 ? g.map( event => {
                                                    let returnValue;
                                            
                                                     if ( event.type === 'LprRead' ) {
                                                    // Lpr events
                                                        returnValue = <Brightness1Icon  className="event-icon" 
                                                                                    style={{ height: '100%', fontSize: 12, color: 'green' }}
                                                                                    key={ event.eId}
                                                                                    onClick={ () => this.showEventModal(event) }
                                                                                    onMouseEnter={ () => this.setState({ currentTooltipEvent: event, showTooltip: true }) }
                                                                                    onMouseLeave={ () => this.setState({ showTooltip: false })} />
                                                     } else if ( event.type === 'LprRead' || event.type === 'TruckEntering' || event.type === 'TruckOn' || event.type === 'TruckLeaving' ) {
                                                      //  Scale events   
                                                        returnValue = <PlayArrowIcon  className="event-icon" 
                                                                                    style={{ height: '100%', fontSize: 16, color: 'red' }}
                                                                                    key={ event.eId}
                                                                                    onClick={ () => this.showEventModal(event) }
                                                                                    onMouseEnter={ () => this.setState({ currentTooltipEvent: event, showTooltip: true }) }
                                                                                    onMouseLeave={ () => this.setState({ showTooltip: false })} />
                                                     } else if ( event.type === 'TicketReceived' ) {
                                                    //Ticket events
                                                        returnValue = <StopIcon  className="event-icon"
                                                                                        style={{ height: '100%', fontSize: 16, color: 'black' }}
                                                                                        key={ event.eId}
                                                                                        onClick={ () => this.showEventModal(event) }
                                                                                        onMouseEnter={ () => this.setState({ currentTooltipEvent: event, showTooltip: true }) }
                                                                                        onMouseLeave={ () => this.setState({ showTooltip: false })} />
                                                     } else if ( event.type === 'ValveOpened' || event.type ==='ValveClosed' ) {
                                                    // Valve events                                    
                                                        returnValue = <GradeIcon className="event-icon"
                                                                            style={{ height: '100%', fontSize: 12, color: 'blue' }}
                                                                            key={ event.eId}
                                                                            onClick={ () => this.showEventModal(event) }
                                                                            onMouseEnter={ () => this.setState({ currentTooltipEvent: event, showTooltip: true }) }
                                                                            onMouseLeave={ () => this.setState({ showTooltip: false })} />
                                                     } else if ( event.type === 'NoTicket' || event.type === 'ValveAlert' || event.type === 'Overweight' || event.type === 'TareWeightContamination' ) {
                                                    // Alert events
                                                        returnValue = <WarningIcon className="event-icon"
                                                                                style={{ height: '100%', fontSize: 12, color: 'orange' }}
                                                                                key={ event.eId}
                                                                                onClick={ () => this.showEventModal(event) }
                                                                                onMouseEnter={ () => this.setState({ currentTooltipEvent: event, showTooltip: true }) }
                                                                                onMouseLeave={ () => this.setState({ showTooltip: false })} />
                                                     } else {
                                                    // Unknown
                                                        returnValue = <HelpIcon className="event-icon"
                                                            style={{ height: '100%', fontSize: 12, color: 'purple' }}
                                                            key={ event.eId}
                                                            onMouseEnter={ () => this.setState({ currentTooltipEvent: event, showTooltip: true }) }
                                                            onMouseLeave={ () => this.setState({ showTooltip: false })} />
                                                     }

                                                    return returnValue;
                                                }) :
                                                null
                                            }
              </div>
            )
    }

    clearTooltip = () => {
        this.setState({ currentTooltipEvent: {}, showTooltip: false })
    }

    setCurrentcurrentTooltipEventEvent = (event) => {
        this.setState({ currentTooltipEvent: event, showTooltip: true })
    }

    render() {

        return(
            <div style={{ width: '100%' }} >
                  { this.state.showTooltip ? 
                        <div className="speech-bubble" style={{ textAlign: 'left', zIndex: 20,padding: 5, position: 'absolute', top: 100, left: '40%', height: 240, width: 260 }} >
                            <p>id: {this.state.currentTooltipEvent.eId}</p>
                            <p>transaction: {this.state.currentTooltipEvent.tId}</p> 
                            <p>location: {this.state.currentTooltipEvent.location}</p>
                            <p>type: {this.state.currentTooltipEvent.type}</p>
                            <p>data: {this.state.currentTooltipEvent.data}</p>
                            <p>time: {this.state.currentTooltipEvent.timestamp}</p> 
                        </div> :
                        null
                    }
                <ReactTable
                    style={{ border: 'none' }}
                    className='-striped -highlight'
                    data={data}
                    columns={this.columns}
                    showPagination={false}
                    defaultPageSize={10}
                    getTheadProps={ () => {
                        return {
                            style: {
                                fontWeight: 'bold',
                            }
                        }
                    }}
                    getTdProps={ () => {
                        return {
                            style: {
                                border: 'none',
                                overflow: 'visible',
                            }
                        }
                    }}
                    getTheadThProps={ () => {
                        return {
                            style: {
                                border: 'none',
                                height: 40
                            }
                        }
                    }}
                />
            </div>
        )
    }
}

export default TableTest;