import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import moment from 'moment'



function WeightMeasurementGraph(props) {

  const currentMeasurements = props.currentMeasurements

  return (
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={currentMeasurements}>
        <XAxis 
          dataKey="date"
          type = 'number'
          domain = {['auto', 'auto']}
          name = 'Time'
          tickFormatter={timeStr => moment(timeStr).format('HH:mm')}
        />
        <YAxis type="number" domain={['dataMin - 1', 'dataMax + 1']} allowDecimals={true}/>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="weight" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default WeightMeasurementGraph;