import React from 'react';
import Draggable, { DraggableCore } from 'react-draggable';
import PieChart from './PieChart';
import LineChart from './LineChart';
import BarChart from './BarChart';
import { Row, Col } from 'react-flexbox-grid';
import { Close } from '@material-ui/icons';
class ChartWidget extends React.Component {

    state = {
        activeDrags: 0,
        deltaPosition: { x: 0, y: 0 },
        controlledPosition: { x: -400, y: 200 },
        chartType: '',
        renderX: 0,
        renderY: 0
  };

  componentDidMount = () => {
      this.setState({ chartType: this.props.type, renderX: this.props.activeCharts.length * 40, renderY: 100 })
  }

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
  };

  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;

    return (
        <Draggable {...dragHandlers} >
            <Col onClick={ () => this.props.setCurrentActiveChart(this.state.chartType) } style={{ zIndex: this.props.currentActiveChart === this.state.chartType ? 22 : 20, position: 'absolute', top: this.state.renderY, left: this.state.renderX,  height: 360, width: 360, backgroundColor: 'rgba(0,0,0,.8)', border: '3px solid grey', borderRadius: 10, padding: 5, boxShadow: '5px 10px 18px #888888' }}>
                <Row center="xs" 
                      middle="xs" >
                    <div style={{ position: 'relative'}}>
                        <p style={{ color: 'white', fontWeight: 'bold', fontSize: '2vmin' }}>
                            { this.props.type === 'line' ? 
                                'Line Chart' :
                            this.props.type === 'bar' ?
                                'BarChart' :
                            this.props.type === 'pie' ? 
                                'Pie Chart':
                                'Unknown Chart'
                            }
                        </p>

                        { this.props.type === 'line' ? 
                            <LineChart /> :
                            this.props.type === 'bar' ?
                            <BarChart /> :
                            this.props.type === 'pie' ? 
                            <PieChart /> :
                            <p style={{ color: 'white' }}>Unknown Chart Type Provided</p>
                        }
                    </div>
                </Row>

                <Close className="link" 
                            style={{ position: 'absolute', top: 10, right: 10, padding: 5 }}
                            onClick={ () => this.props.removeActiveChart(this.state.chartType) } />
            </Col>
        </Draggable>
    )
  }
}

export default ChartWidget;