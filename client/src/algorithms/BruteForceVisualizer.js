import React from "react";
import AlgorithmVisualizer from "./AlgorithmVisualizer";
import Tracer from "../utils/Tracer";

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
  const tracer = new Tracer();

  tracer.newStep();
  tracer.logger("Starting...");
  tracer.saveVariables([
    { name: "array", value: array },
    { name: "target", value: target },
    { name: "i", value: undefined },
    { name: "current", value: undefined },
  ]);

  let response = -1;
  tracer.newStep();
  tracer.logger("Initialize i");
  let i = 0;
  tracer.saveVariables([{ name: "i", value: i }]);

  tracer.newStep();
  tracer.logger(`Comparing i < array.length`);

  for (; i < array.length; ) {
    tracer.newStep();
    tracer.logger(`Initializing current variable`);
    const current = array[i];
    tracer.saveVariables([{ name: "current", value: current }]);

    tracer.newStep();
    tracer.logger(`Checking if current is equal target`);

    if (current === target) {
      tracer.logger(`We found the target at position i`);
      response = i;
      break;
    }

    tracer.newStep();
    tracer.logger(`Incrementing i value`);
    i++;
    tracer.saveVariables([{ name: "i", value: i }]);

    tracer.newStep();
    tracer.logger(`Comparing i < array.length`);
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
