import React from "react";
import { useState } from "react";
import Graph from "./Graph";

import { randomUniqueArray } from "./utils/random-array";
import { randomNumber } from "./utils/random-number";

function avg(size, array){
  let sum = [];
  array.forEach(item => sum+= item);
  const response = sum/array.length;
  console.log('avg', size, array, response);
  return response;
}

function median(size, array){
  if(array.length == 0) return 0;
  array.sort((a,b) => a - b);

  const response = array[Math.floor(array.length/2)];
  console.log('median', size, array, response);
  return response;
}

function binarySearch(array, target) {
  let counter = 0;

  let l = 0;
  let r = array.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (array[m] == target) {
      counter++;
      return {index: m, counter};
    } else if (array[m] < target) {
      counter++;
      l = m + 1;
    } else {
      counter++;
      r = m - 1;
    }
  }
  return {index: -1, counter};
}

function bruteForceSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return {index:i, counter: i};
    }
  }
  return {index:-1, counter: array.length};
}

const NUMBER_OF_EXECUTIONS = 1_000;

const Benchmarks = () => {
  let [randomData, setRandomData] = useState([]);
  let [binarySearchExecution, setBinarySearchExecution] = useState([]);
  let [bruteForceSearchExecution, setBruteForceSearchExecution] = useState([]);

  const handleButtonGenerateDataClick = () => {
    const NUMBER_OF_TESTS = 10;
    
    const INCREMENT = 10_000;
    const minValue = 0;
    const maxValue = Number.MAX_SAFE_INTEGER;

    const newData = [];
    let arraySize = 100_000;
    while(newData.length < NUMBER_OF_TESTS) {
      arraySize += INCREMENT;
      const array = randomUniqueArray(arraySize, minValue, maxValue);
      //const randomPos = arraySize - 1;//randomNumber(0, arraySize - 1);
      //console.log('randomPos', array.length, randomPos);
      const target = -1; // array[randomPos];
      console.log('generating', array.length);
      newData.push({
        array,
        target,
      });
    }

    setRandomData(newData);
  };

  const handleButtonBinarySearchClick = () => {
    const response = [];

    for (let i = 0; i < randomData.length; i++) {
      let times = [];
      const currentData = randomData[i];
      for(let j=1;j <= NUMBER_OF_EXECUTIONS;j++){
        const t0 = performance.now();
        const response = binarySearch(currentData.array, currentData.target);
        const t1 = performance.now();

        times.push((t1 - t0) * 1000);
      }
      const size = currentData.array.length;
      response.push({ time: response.counter, timeMs: median(size, times),  size });
    }

    setBinarySearchExecution(response);
  };

  const handleButtonBruteForceSearchClick = () => {
    const response = [];
    
    for (let i = 0; i < randomData.length; i++) {
      const currentData = randomData[i];
      let times = [];
      for(let j=1;j <= NUMBER_OF_EXECUTIONS;j++){
        const t0 = performance.now();
        const response = bruteForceSearch(currentData.array, currentData.target);
        const t1 = performance.now();
        times.push((t1 - t0) * 1000);
      }
      const size = currentData.array.length
      response.push({ time: response.counter, timeMs: median(size, times), size });
    }
    setBruteForceSearchExecution(response);
  };

  return (
    <div style={styles.main}>
      <header style={styles.header}>
        <h1>Benchmarks</h1>
      </header>
      <div style={styles.container}>
        We will create a list of input data, something such Array A with size 1:
        [a] target: e ∈ A Array A with size 2: [a, b] target: e ∈ A Array A with
        size 3: [a, b, c] target: e ∈ A ... Array A with size N: [a, b, c ...,
        n-th] target: e ∈ A We gonna measure the time to run the algorithm for a
        given input. We will run the same algorithm for each size for 5 times.
      </div>
      <div style={styles.container}>
        <button style={styles.button} onClick={handleButtonGenerateDataClick}>
          Generate Random Data
        </button>
        <button style={styles.button} onClick={handleButtonBinarySearchClick}>
          Run Binary Search
        </button>
        <button
          style={styles.button}
          onClick={handleButtonBruteForceSearchClick}
        >
          Run Brute Force Search
        </button>
      </div>
      <div style={styles.container}>
        Random Data
        <div>
          {randomData.length > 0 ? `Data Size: ${randomData.length} samples` : 'Empty'}
        </div>
      </div>
      <div style={styles.container}>
        Execution Time
        <div>
          <Graph
            data={[
              { label: "Brute Force ", data: bruteForceSearchExecution },
              { label: "Binary Search", data: binarySearchExecution },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  main: {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    maxWidth: "800px",
    padding: "20px",
  },
  container: {
    padding: "20px",
    margin: "20px",
    backgroundColor: "#FFEEEE",
  },
  header: {
    backgroundColor: "#FFC0CB",
    color: "white",
    padding: "10px 0",
    textAlign: "center",
  },
  button: {
    padding: "5px",
    margin: "5px",
  },
};

export default Benchmarks;
