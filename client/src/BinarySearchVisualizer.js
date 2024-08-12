import React from "react";
import AlgorithmVisualizer from "./AlgorithmVisualizer";
import { createTracer } from "./utils/tracer";
const code = `function binarySearch(array, target){
    let left = 0;
    let right = array.length-1;
    while(left <= right){
     const middle = Math.floor((left+right)/2);
     if(array[middle] == target){
        return middle;
      } else if(array[middle] < target){
        left = middle;
      } else {
        right = middle;
      }
    }
    return -1;
  }`;

function binarySearch(array, target) {
  const tracer = createTracer();

  tracer.newStep();
  tracer.logger("Starting...");

  let response = -1;
  let l = 0;
  let r = array.length - 1;

  tracer.saveVariables([
    { name: "left", value: 0 },
    { name: "right", value: r },
    { name: "middle", value: undefined },
    { name: "array", value: array },
  ]);

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const middle = array[m];

    tracer.newStep();
    tracer.logger("Executing the while");
    tracer.logger("Creating m variable");

    tracer.saveVariables([
      { name: "left", value: l },
      { name: "right", value: r },
      { name: "middle", value: m },
      { name: "array", value: array },
    ]);

    tracer.logger("Checking if middle is equal target");

    if (middle == target) {
      tracer.logger("We found the target");
      response = m;
      tracer.logger("Skipping while");

      break; // skip the while
    } else if (middle < target) {
      tracer.logger("middle is lower than target");

      l = middle;
    } else {
      tracer.logger("middle is greater than target");

      r = middle;
    }
  }
  tracer.newStep();
  tracer.logger("returning");

  tracer.saveResult(response);
  return tracer.getState();
}

const BinarySearchVisualizer = () => {
  return (
    <AlgorithmVisualizer
      inputFunction={binarySearch}
      code={code}
      title="Binary Search Visualizer"
    />
  );
};

export default BinarySearchVisualizer;
