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
            width: 40,
            // className: "stickyTop",
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.tId}</span>
        }, {
            Header: 'lpn',
            accessor:'lpn',
            show: true,
            width: 140,
            // className: "stickyTop",
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.lpn}</span>
        }, {
            Header: 'start',
            accessor: 'start',
            show: true,
            width: 200,
            // className: "stickyTop",
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.start}</span>
        }, {
            Header: 'end',
            accessor: 'end',
            show: true,
            width: 200,
            // className: "stickyTop",
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.end}</span>
        }, {
            Header: '# of events',
            accessor: 'events',
            show: true,
            // className: "stickyTop",
            headerClassName: "stickyTop",
            Cell: row => <span style={{ padding: 0, margin: 0 }}>{row.original.events.length}</span> 
        }, {
            Header: 'ticket',
            accessor: 'events',
            show: true,
            // className: "stickyTop",
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}></span>
        }, {
            Header: 'images',
            accessor: 'events',
            show: true,
            // className: "stickyTop",
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}></span>
          }];
        
        this.columnsSub = [{
        //     Header: 'id',
        //     accessor: 'eId',
        //     show: true,
        //     Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.eId}</span>
        // }, {
        //     Header: 'Transaction Id',
        //     accessor:'tId',
        //     show: true,
        //     Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.tId}</span>
        // }, {
            Header: 'Location',
            accessor: 'location',
            show: true,
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.location}</span>
        }, {
            Header: 'Type',
            accessor: 'type',
            show: true,
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.type}</span>
        }, {
            Header: 'Data',
            accessor: 'data',
            show: true,
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.data}</span>
        }, {
            Header: 'Date/Time',
            accessor: 'timestamp',
            show: true,
            Cell: row => <span style={{ padding: 0, margin: 0 }}>{moment(row.original.timestamp).format('MM-DD-YYY hh:mm:ss a')}</span>
          }];
    }



    render() {

        return(
            <div style={{ height: window.innerHeight - 300, width: '100%' }}>

                <ReactTable
                    style={{ height: window.innerHeight - 300, fontSize: 12, color: 'grey', fontWeight: 'bold' }}
                    className='-striped -highlight rTableView1'
                    data={data}
                    columns={this.columns}
                    sortable={true}
                    filterable={true}
                    showPagination={true}
                    showPageSizeOptions={false}
                    getTrProps={(state, rowInfo, column) => {
                        if(rowInfo){
                            return  { style: state.expanded[rowInfo.index] ? { background: "rgba(37, 116, 169, .7)", 
                                                                              color: "white",
                                                                              height: 26,
                                                                              margin: 0, 
                                                                              padding: 0,
                                                                              boxShadow: `0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)` 
                                                                            } : 
                                                                            {   height: 26,
                                                                                margin: 0, 
                                                                                padding: 0,
                                                                            }
                                                                        };
                                                          
                        } else {
                            return { style: {   height: 26,
                                                margin: 0, 
                                                padding: 0,
                                             } 
                                    };
                        }
                    }}
                   
                    SubComponent={row => (
                            <ReactTable
                                style={{ width: '94%', marginLeft: 40, marginTop: 10, marginBottom: 10, fontSize: 12, color: 'grey', fontWeight: 'bold' }}
                                className='-striped -highlight rTableView2'
                                data={row.original.events}
                                columns={this.columnsSub}
                                getProps={() => {
                                    return { style: {borderBottomWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderColor:  "rgba(37, 116, 169, .7)" }};
                                }}
                                getTheadThProps={(state, rowInfo, column) => {
                                        return state.expanded ? { style: {  background: "grey", 
                                                                            color: "white", 
                                                                            boxShadow: `0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`
                                                                        }} : "";
                                }}
                                getTrProps={ () => {
                                    return { style: { height: 26 } }
                                }}
                                filterable={false}
                                showPagination={false}
                                defaultPageSize={row.original.events.length} />
                        )}
                />
            </div>
        )
    }
}

export default TableViewTable;