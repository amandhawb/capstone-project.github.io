import React from "react";
import { Chart } from "react-google-charts";

const Graph = (props) => {
  
  if(props.data.length != 2){
    return;
  }
  
  const data = [];
  const algorithm1Data = props.data[0].data;
  const algorithm2Data = props.data[1].data;
  data.push(["Array Size", props.data[0].label, props.data[1].label]);
  if(algorithm1Data.length != algorithm2Data.length){
    return;
  }

  for(let i=0;i<algorithm1Data.length;i++){
    data.push([algorithm1Data[i].size.toString(), algorithm1Data[i].time, algorithm2Data[i].time]);
  }
  
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={{
        title: "Benchnark",
        curveType: "function",
        legend: { position: "bottom" },
        vAxis: {
          logScale: true,
          minValue: 0
        },
      }}
    />
  );
};

export default Graph;