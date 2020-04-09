import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css'
import { transactions, events } from '../mockData.js';
import moment from 'moment';
import '../../App.css'
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
// import EmailIcon from '@material-ui/icons/Email';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ImageIcon from '@material-ui/icons/Image';
import DescriptionIcon from '@material-ui/icons/Description';

const data =  transactions.map( t => (
    {
        tId: t.id,
        lpn: t.sLpn,
        start: t.dStartTimestamp,
        end: t.dEndTimestamp,
        complete: t.dStartTimestamp.length > 0 && t.dEndTimestamp.length > 0 ? true : false,
        duration: t.dStartTimestamp.length > 0 && t.dEndTimestamp.length > 0 ? moment(t.dEndTimestamp).diff(moment(t.dStartTimestamp), 'minutes' )  : null,
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
            expanded: {}
        }

        this.columns = [{
            Header: 'id',
            accessor: 'tId',
            show: true,
            width: 40,
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.tId}</span>
        }, {
            Header: 'lpn',
            accessor:'lpn',
            show: true,
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.lpn}</span>
        }, {
            Header: 'start',
            accessor: 'start',
            show: true,
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.start}</span>
        }, {
            Header: 'duration',
            accessor: 'duration',
            show: true,
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.duration} min</span>
        }, {
            Header: 'events in transaction',
            accessor: 'events',
            show: true,
            headerClassName: "stickyTop",
            Cell: row => <span style={{ padding: 0, margin: 0 }}>{row.original.events.length}</span> 
        }, {
            Header: 'ticket',
            accessor: 'events',
            show: true,
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{ row.original.events.filter(ev => ev.type === 'TicketReceived')[0] ? row.original.events.filter(ev => ev.type === 'TicketReceived')[0].data : ''}</span>
        }, {
            Header: 'pdf',
            accessor: 'events',
            show: true,
            width: 70,
            filterable: false,
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                 onClick={ () => alert(`view entire transaction with id ${row.original.tId} as pdf.`)}><PictureAsPdfIcon style={{ fontSize: 16 }} /></span>
          }];
        

        this.columnsSub = [{
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
            Header: 'Basic Data',
            accessor: 'data',
            show: true,
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.data}</span>
        }, {
            Header: 'Date/Time',
            accessor: 'timestamp',
            show: true,
            Cell: row => <span style={{ padding: 0, margin: 0 }}>{moment(row.original.timestamp).format('MM-DD-YYYY hh:mm:ss a')}</span>
        }, {
            Header: 'image links or other media',
            accessor: 'timestamp',
            show: true,
            Cell: (row) => <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <ImageIcon style={{ fontSize: 16, marginRight: 12, marginLeft: 12 }} onClick={ () => alert(`view first image for event with id ${row.original.eId}.`)} />
                                <ImageIcon style={{ fontSize: 16, marginRight: 12, marginLeft: 12 }} onClick={ () => alert(`view second image for event with id ${row.original.eId}.`)} />
                                <DescriptionIcon style={{ fontSize: 16, marginRight: 12, marginLeft: 12 }} onClick={ () => alert(`view ticket or data for event with id ${row.original.eId} as pdf.`)} />
                            </span>
          }];
    }

    handleRowExpanded(newExpanded, index, event) {
        this.setState({
        // we override newExpanded, keeping only current selected row expanded
            expanded: {
                [index[0]]: !this.state.expanded[index[0]]
            },
        });
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
                    // enable this to limit the expanded row to 1 at a time
                    expanded={this.state.expanded}
                    onExpandedChange={(newExpanded, index, event) => this.handleRowExpanded(newExpanded, index, event)}
                    getTrProps={(state, rowInfo, column) => {
                        if(rowInfo){
                            return  { style: state.expanded[rowInfo.index] ? { background: "rgba(37, 116, 169, .8)", 
                                                                              color: "white",
                                                                              height: 26,
                                                                              margin: 0, 
                                                                              padding: 0,
                                                                              boxShadow: `0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
                                                                              position: 'sticky',
                                                                              top: 0,
                                                                              zIndex: 1
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
                                style={{    width: '94%', 
                                            marginLeft: 40, 
                                            marginTop: 10, 
                                            marginBottom: 10, 
                                            fontSize: 12, 
                                            color: 'grey', 
                                            fontWeight: 'bold',  
                                           }}
                                className='-striped -highlight rTableView2'
                                data={row.original.events}
                                columns={this.columnsSub}
                                getProps={() => {
                                    return { style: {   borderBottomWidth: 2, 
                                                        borderRightWidth: 2, 
                                                        borderLeftWidth: 2, 
                                                        borderColor:  "rgba(37, 116, 169, .7)" }};
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