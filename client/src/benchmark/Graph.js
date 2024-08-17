import React from "react";
import { Chart } from "react-google-charts";

const Graph = (props) => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={props.data}
      options={{
        title: "Benchnark",
        curveType: "function",
        legend: { position: "bottom" },
        vAxis: {
          logScale: true,
          minValue: 0,
        },
      }}
    />
  );
};

export default Graph;
