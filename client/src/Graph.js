import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Array Size", "Algorithm 1", "Algorithm 2"],
  // ["2004", 1000, 400],
  // ["2005", 1170, 460],
  // ["2006", 660, 1120],
  // ["2007", 1030, 540],
];

export const options = {
  title: "Benchnark",
  curveType: "function",
  legend: { position: "bottom" },
};

const Graph = (props) => {
  const data = [];

  const algorithm1 = props.data[0];
  const algorithm2 = props.data[1];
  for(let i=0;i<algorithm1.length;i++){
    data.push([algorithm1.size, algorithm1.time, algorithm2.size]);
  }
  
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
export default Graph;

// const data = [
//   {
//     label: "React Charts",
//     data: [
//       {
//         date: new Date(),
//         stars: 202123,
//       },
//     ],
//   },
//   {
//     label: "React Query",
//     data: [
//       {
//         date: new Date(),
//         stars: 10234230,
//       },
//     ],
//   },
// ];

// const Graph = (props) => {
//   const {data} = props;
//   const primaryAxis = React.useMemo(
//     () => ({
//       getValue: (datum) => datum.size,
//     }),
//     [],
//   );

//   const secondaryAxes = React.useMemo(
//     () => [
//       {
//         getValue: (datum) => datum.time,
//       },
//     ],
//     [],
//   );

//   return (
//     <Chart
//       options={{
//         data,
//         primaryAxis,
//         secondaryAxes,
//       }}
//     />
//   );
// };
