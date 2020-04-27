import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList,
} from 'recharts';

const data = [
  {
    name: 'day', transactions: 6,
  },
  {
    name: 'week', transactions: 90,
  },
  {
    name: 'month', transactions: 403,
  },
  {
    name: 'year', transactions: 3892,
  },
];

const renderCustomizedLabel = (props) => {
  const {
    x, y, width, height, value,
  } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value.split(' ')[1]}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/a5Leskck/';

  render() {
    return (
      <BarChart
        width={330}
        height={260}
        data={data}
        style={{ marginTop: -80 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Bar dataKey="transactions" fill="#8884d8" minPointSize={5}>
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar> */}
        <Bar dataKey="transactions" fill="#82ca9d" minPointSize={10} />
      </BarChart>
    );
  }
}
