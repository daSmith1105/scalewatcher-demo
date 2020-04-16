import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css'
import { transactions, events, tickets } from '../mockData.js';
import moment from 'moment';
import '../../App.css'
import { PictureAsPdf }  from '@material-ui/icons';
import TicketTemplate from '../TicketTemplate';
import TransactionPdf from '../TransactionPdf';
import ActionsModal from './ActionsModal';

const data =  transactions.map( t => (
    {
        tId: t.id,
        lpn: t.sLpn,
        start: t.dStartTimestamp,
        end: t.dEndTimestamp,
        complete: t.dStartTimestamp.length > 0 && t.dEndTimestamp.length > 0 ? true : false,
        duration: t.dStartTimestamp.length > 0 && t.dEndTimestamp.length > 0 ? moment(t.dEndTimestamp).diff(moment(t.dStartTimestamp), 'minutes' )  : null,
        checked: false,
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
            expanded: {},
            checked: {},
            showTicket: false,
            showActionsModal: false,
            currentTransaction: {},
            fixedX: 0,
            fixedY : 0,
            showTransactionPdf: false,
            currentTransactionPdf: {}
        }

        this.columns = [{
            id: 'checked',
            Header: '',
            accessor: r => r.checked,
            show: true,
            width: 40,
            headerClassName: "stickyTop",
            Cell: (row) => <span>
                                <input type="checkbox" 
                                        value={ row.original.checked } 
                                        style={{ marginTop: -10 }}
                                        onClick={ () => {
                                            row.original.checked === false ? row.original.checked = true : row.original.checked = false;
                                            console.log(row.original.tId, row.original.checked)
                                        }} />
                            </span>
        }, {
            Header: '',
            expander: true,
            accessor: 'tId',
            show: true,
            filteable: false,
            sortable: true,
            headerClassName: "stickyTop",
        }, {
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
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{moment(row.original.start).format('MM-DD-YYYY   hh:mm:ss a')}</span>
        }, {
            Header: 'duration',
            accessor: 'duration',
            show: true,
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{ padding: 0, margin: 0 }}>{row.original.duration} min</span>
        }, {
            id: 'events_length',
            Header: 'events in transaction',
            accessor: r => r.events.length,
            show: true,
            headerClassName: "stickyTop",
            Cell: row => <span style={{ padding: 0, margin: 0 }}>{row.original.events.length}</span> 
        }, {
            id: 'ticket',
            Header: 'ticket',
            accessor: r => r.events.filter(ev => ev.type === 'TicketReceived')[0] ? r.events.filter(ev => ev.type === 'TicketReceived')[0].data.split(':')[1].trim() : null,
            show: true,
            headerClassName: "stickyTop",
            Cell: (row) => row.original.events.filter(ev => ev.type === 'TicketReceived')[0] ? 
                            <span className="button-like"style={{ padding: 10, margin: 0, marginTop: -20,  width: '100%', overflow: 'hidden', height: 30, border: 'none', borderRadius: 0, verticalAlign: 'center' }}
                                    onClick={ () => this.displayTicket( tickets.filter( t => t.id.toString() === row.original.events.filter(ev => ev.type === 'TicketReceived')[0].data.split(':')[1].trim() ) ) }>
                                    {row.original.events.filter(ev => ev.type === 'TicketReceived')[0].data.split(':')[1]}
                            </span> :
                            null
        }, {
            Header: 'actions',
            accessor: 'events',
            show: true,
            width: 70,
            filterable: false,
            headerClassName: "stickyTop",
            Cell: (row) => <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                 {/* onClick={ () => this.displayActionsModal(row.original, this.props.x -176, this.props.y - 100) }> */}
                                <PictureAsPdf   style={{ fontSize: 16 }} 
                                                onClick={ () => this.displayTransactionPdf(row.original) } />
                                </span>
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
        // }, {
        //     Header: 'image links or other media',
        //     accessor: 'timestamp',
        //     show: true,
        //     Cell: (row) => <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        //                         <ImageIcon style={{ fontSize: 16, marginRight: 12, marginLeft: 12 }} onClick={ () => alert(`view first image for event with id ${row.original.eId}.`)} />
        //                         <ImageIcon style={{ fontSize: 16, marginRight: 12, marginLeft: 12 }} onClick={ () => alert(`view second image for event with id ${row.original.eId}.`)} />
        //                         <DescriptionIcon style={{ fontSize: 16, marginRight: 12, marginLeft: 12 }} onClick={ () => alert(`view ticket or data for event with id ${row.original.eId} as pdf.`)} />
        //                     </span>
          }];
    }

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleRowExpanded( newExpanded, index, event ) {
        this.setState({
        // we override newExpanded, keeping only current selected row expanded
            expanded: {
                [index[0]]: !this.state.expanded[index[0]]
            },
        });
    }

    handleRowChecked( index ) {
        console.log(index)
        this.setState({
        // we override newExpanded, keeping only current selected row expanded
            checked: {
                [index]: !this.state.checked[index]
            },
        });
    }

    displayTicket = (ticket) => {
        this.setState({ currentTicket: ticket[0], showTicket: true });
    }
    closeTicketView = () => {
        this.setState({ currentTicket: {}, showTicket: false });
    }

    displayTransactionPdf = (transaction) => {
        // alert(JSON.stringify(transaction));
        this.setState({ currentTransactionPdf: transaction, showTransactionPdf: true });
    }
    closeTransactionPdf = () => {
        this.setState({ currentTransactionPdf: {}, showTransactionPdf: false });
    }

    displayActionsModal = (transaction, x, y) => {
        this.setState({ 
            currentTransaction: transaction, 
            showActionsModal: true,
            fixedX: x,
            fixedY: y  
        });
    }

    closeActionsModal = () => {
        this.setState({ currentTransaction: {}, showActionsModal: false });
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
                            return  { style: state.expanded[rowInfo.index] ? {  background: "rgba(37, 116, 169, .8)", 
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

                { this.state.showTicket ? 
                    <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', zIndex: 12, backgroundColor: 'rgba(0,0,0,.6)' }}>
                        <TicketTemplate ticket={ this.state.currentTicket }
                                        closeTicketView={ this.closeTicketView } /> 
                    </div>:
                    null
                }


                { this.state.showTransactionPdf ? 
                    <div style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', zIndex: 1, backgroundColor: 'rgba(0,0,0,.6)' }}>
                        <TransactionPdf transaction={ this.state.currentTransactionPdf }
                                        closeTransactionPdf={ this.closeTransactionPdf }
                                        displayTicket={ this.displayTicket } /> 
                    </div>:
                    null
                }

                { this.state.showActionsModal ? 
                    // need to get the row index so we can display this below the row and to the right
                    <div style={{ position: 'fixed', top: this.state.fixedY, left: this.state.fixedX, zIndex: 1 }}>
                        <ActionsModal transaction={ this.state.currentTransaction }
                                      closeActionsModal={ this.closeActionsModal } /> 
                    </div>:
                    null
                }
            </div>
        )
    }
}

export default TableViewTable;