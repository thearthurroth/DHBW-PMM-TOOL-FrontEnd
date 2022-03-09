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


// Daten über Auslastung (werden in Verknüpftem Fron- und Backend über die API übergeben)
const data = [
  { calendarweek: '1', percentage: 0.235 },
  { calendarweek: '2', percentage: 0.132 },
  { calendarweek: '3', percentage: 0.651 },
  { calendarweek: '4', percentage: 0.322 },
  { calendarweek: '5', percentage: 0.832 },
  { calendarweek: '6', percentage: 0.354 },
  { calendarweek: '7', percentage: 1.346 },
];

// Klasse WorkloadChart, verantwortlich für das Erstellen der Tabelle mit den Workloads der Mitarbeiter ist
export default class WorkloadChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  // Rendern der Tabelle anhand der übergebenen Daten
  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          {/* Übergabe der Parameter, die zuvor in den Variablen definiert wurden */}
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