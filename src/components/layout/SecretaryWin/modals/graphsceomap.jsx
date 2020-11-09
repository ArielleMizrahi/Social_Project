import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: props.GraphsForCeo,
    };
  }

  render() {
    return (
      <Paper>
        <Chart data={this.state.data} dir="rtl">
          <ArgumentAxis />
          <ValueAxis max={20} />

          <BarSeries valueField="galia" argumentField="eden" />
          <Title text="כמות פניות לועדה" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
