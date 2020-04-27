import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {
  PieChart, Pie, Sector, Cell, Legend, Tooltip,
} from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180; 

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
      {/* hello */}
    </text>
  );
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy - 5} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <text x={cx} y={cy + 5} dy={18} textAnchor="middle" fill={fill}>{payload.value}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text> */}
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={10} textAnchor={textAnchor} fill="#999" style={{ fontSize: 12 }}>
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  }

    render() {
      const data = [ 
        this.props.events.filter(ev => ev.sEventType === 'TruckEntering').length > 0 && { name: 'Truck Entering', value: this.props.events.filter(ev => ev.sEventType === 'TruckEntering').length }, 
        this.props.events.filter(ev => ev.sEventType === 'TruckOn').length > 0 && { name: 'Truck On', value: this.props.events.filter(ev => ev.sEventType === 'TruckOn').length },
        this.props.events.filter(ev => ev.sEventType === 'TruckLeaving').length > 0 && { name: 'Truck Leaving', value: this.props.events.filter(ev => ev.sEventType === 'TruckLeaving').length }, 
        this.props.events.filter(ev => ev.sEventType === 'TicketReceived').length > 0 && { name: 'Ticket Received', value: this.props.events.filter(ev => ev.sEventType === 'TicketReceived').length },
        this.props.events.filter(ev => ev.sEventType === 'LprRead').length > 0 && { name: 'LPR Read', value: this.props.events.filter(ev => ev.sEventType === 'LprRead').length }, 
        this.props.events.filter(ev => ev.sEventType === 'NoTicket').length > 0 && { name: 'No Ticket', value: this.props.events.filter(ev => ev.sEventType === 'NoTicket').length },
        this.props.events.filter(ev => ev.sEventType === 'OverWeight').length > 0 && { name: 'Overweight', value: this.props.events.filter(ev => ev.sEventType === 'OverWeight').length },
      ];
      
      return (
        <PieChart width={800} height={400} >
            <Pie
            	activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape} 
              data={data} 
              cx={400} 
              cy={110} 
              labelLine={false}
              label={renderCustomizedLabel}
              // outerRadius={80} 
              innerRadius={60}
              outerRadius={80} 
              fill="#8884d8"
              onMouseEnter={this.onPieEnter}
            >
            {
              data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
            }
            </Pie>
          {/* <Tooltip/> */}
        </PieChart>
      );
    }
}
