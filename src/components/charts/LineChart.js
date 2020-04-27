import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class Example extends PureComponent {

    state = {
        average: 0
    }

    componentDidMount = () => {
        let total = 0;
        this.props.data.forEach( t => {
            return total = total + t.duration
        })
        let a = this.roundDown(total / this.props.data.length)

        this.setState({ average: a })
    }

    roundDown = (x) => {
        return Math.floor(x);
    }

  render() {
    const data = this.props.data.map( d => (
        { name: d.lpn || 'N/A', duration: d.duration, amt: d.duration }
    ));

    return (
        <div>
            <LineChart
                width={330}
                height={220}
                data={data}
                style={{ marginTop: -100 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="duration" stroke="#8884d8"  />  
            </LineChart>
            <p style={{ color: 'white' }}>Average cycle time: {this.state.average} min</p>
        </div>
    );
  }
}
