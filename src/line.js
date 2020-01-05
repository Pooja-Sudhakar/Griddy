import React from 'react';
import {XYPlot, HorizontalGridLines,LineSeries,XAxis,YAxis} from 'react-vis';
//import { render } from '@testing-library/react';

class Line extends React.Component{
    render(){
        return(
            <XYPlot
  stackBy="y"
  width={300}
  height={300}>
  <LineSeries
    data={[
      {x: 1, y: 10},
      {x: 2, y: 5},
      {x: 3, y: 15}
    ]}/>
  <LineSeries
    data={[
      {x: 1, y: 12},
      {x: 2, y: 21},
      {x: 3, y: 2}
    ]}/>
</XYPlot>
        );
    };
}

export default Line;