import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { calendarweek: '1', percentage: 0.235 },
  { calendarweek: '2', percentage: 0.132 },
  { calendarweek: '3', percentage: 0.651 },
  { calendarweek: '4', percentage: 0.322 },
  { calendarweek: '5', percentage: 0.832 },
  { calendarweek: '6', percentage: 0.354 },
  { calendarweek: '7', percentage: 1.346 },
];

export default class WorkloadChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="percentage"
            argumentField="calendarweek"
          />
          <Title text="Employee workload" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}