import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css'
import { transactions, events } from '../mockData.js';
import moment from 'moment';
import '../../App.css'

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

function roundDown5(x)
{
    return Math.floor(x/5)*5;
}

class TableViewTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            test: false
        }

        this.columns = [{
            Header: 'id',
            accessor: 'tId',
            show: true,
        }, {
            Header: 'lpn',
            accessor:'lpn',
            show: true,
        }, {
            Header: 'start',
            accessor: 'start',
            show: true,
        }, {
            Header: 'end',
            accessor: 'end',
            show: true,
        }, {
            Header: 'events',
            accessor: 'events',
            show: true,
            Cell: row => <span>{JSON.stringify(row.original.events)}</span> 
          }];
    }



    render() {

        return(
            <div>

                <ReactTable
                    className='-striped -highlight'
                    data={data}
                    columns={this.columns}
                    sortable={false}
                    showPagination={false}
                    defaultPageSize={16}
                   
                />
            </div>
        )
    }
}

export default TableViewTable;