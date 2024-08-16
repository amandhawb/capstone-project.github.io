import React from "react";
import AlgorithmVisualizer from "./AlgorithmVisualizer";
import Tracer from "./utils/Tracer";

const code = `function binarySearch(array, target){
    let left = 0;
    let right = array.length - 1;

    while(left <= right){
     const middle = Math.floor((left + right) / 2);
     if(array[middle] === target){
        return middle;
      } else if(array[middle] < target){
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    return -1;
  }`;

function binarySearch(array, target) {
  let response = -1;

  const tracer = new Tracer();
  tracer.newStep();
  tracer.logger("Starting...");

  tracer.saveVariables([
    { name: "array", value: array },
    { name: "target", value: target },
    { name: "left", value: undefined },
    { name: "right", value: undefined },
    { name: "middle", value: undefined },
  ]);

  tracer.newStep();
  tracer.logger("Initializing left");
  let left = 0;
  tracer.saveVariables([{ name: "left", value: left }]);

  tracer.newStep();
  tracer.logger("Initializing right");
  let right = array.length - 1;
  tracer.saveVariables([{ name: "right", value: right }]);

  tracer.newStep();
  tracer.logger(`Checking ${left} < ${right}`);
  while (left <= right) {
    tracer.newStep();
    tracer.logger("Initializing middle");
    const middle = Math.floor((left + right) / 2);
    tracer.saveVariables([{ name: "middle", value: middle }]);

    tracer.newStep();
    tracer.logger("Checking if array[middle] is equal target");
    if (array[middle] === target) {
      tracer.newStep();
      tracer.logger(`We found the target ${target} at position ${middle}`);
      response = middle;
      tracer.logger("Returning middle");
      break; // skip the while
    }

    tracer.newStep();
    tracer.logger("Checking if array[middle] is lower than target");
    if (array[middle] < target) {
      tracer.newStep();
      tracer.logger(
        "array[middle] is lower than target. Lets update left pointer",
      );
      tracer.logger("Updaring left value");
      left = middle + 1;
      tracer.saveVariables([{ name: "left", value: left }]);
    } else {
      tracer.newStep();
      tracer.logger("middle is greater than target");
      tracer.logger("Updating right value");
      right = middle - 1;
      tracer.saveVariables([{ name: "right", value: right }]);
    }
  }

  tracer.newStep();
  tracer.logger("Finished");

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
