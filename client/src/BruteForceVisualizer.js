import React from "react";
import AlgorithmVisualizer from "./AlgorithmVisualizer";
import { createTracer } from "./utils/tracer";

const code = `function bruteForceSearch(array, target){
    for(let i=0;i < array.length;i++){
      const current = array[i];
      if (current == target){
          return i;
      }
    }
    return -1;
  }`;

function bruteForceSearch(array, target) {
  const tracer = createTracer();

  tracer.newStep();
  tracer.logger("Starting...");

  let response = -1;
  for (let i = 0; i < array.length; i++) {
    tracer.newStep();
    tracer.logger(`Executing for ${i}`);

    tracer.saveVariables([
      { name: "i", value: i },
      { name: "array", value: array },
    ]);

    const current = array[i];
    if (current == target) {
      tracer.logger(`We found the target`);
      response = i;
      break;
    }
  }
  tracer.saveResult(response);
  return tracer.getState();
}

const BruteForceVisualizer = () => {
  return (
    <AlgorithmVisualizer
      inputFunction={bruteForceSearch}
      code={code}
      title="Brute Force Visualizer"
    />
  );
};

export default BruteForceVisualizer;
