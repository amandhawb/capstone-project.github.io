import React from "react";
import { useState } from "react";
import Graph from "./Graph";

import { randomUniqueArray } from "./utils/random-array";
import { randomNumber } from "./utils/random-number";
import Variable from "./Variable";

function binarySearch(array, target) {
  let l = 0;
  let r = array.length - 1;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (array[m] == target) {
      return m;
    } else if (array[m] < target) {
      l = m;
    } else {
      r = m;
    }
  }
  return -1;
}

function bruteForceSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return i;
    }
  }
  return -1;
}

const Benchmarks = () => {
  let [randomData, setRandomData] = useState([]);
  let [binarySearchExecution, setBinarySearchExecution] = useState([]);
  let [bruteForceSearchExecution, setBruteForceSearchExecution] = useState([]);

  const handleButtonGenerateDataClick = () => {
    const NUMBER_OF_TESTS = 1000;
    
    const INCREMENT = 100;
    const minValue = 0;
    const maxValue = 1000000;

    const newData = [];
    for (let i = 1; i <= NUMBER_OF_TESTS; i = i + INCREMENT) {
      const arraySize = i;
      const array = randomUniqueArray(arraySize, minValue, maxValue);
      const randomPos = randomNumber(0, arraySize - 1);
      const target = array[randomPos];
      newData.push({
        array,
        target,
        arraySize,
      });
    }
    setRandomData(newData);
  };

  const handleButtonBinarySearchClick = () => {
    const response = [];
    for (let i = 0; i < randomData.length; i++) {
      const currentData = randomData[i];
      const t0 = performance.now();
      binarySearch(currentData.array, currentData.target);
      const t1 = performance.now();
      const time = t1 - t0;
      response.push({ time, size: currentData.length });
    }
    setBruteForceSearchExecution(response);
  };

  const handleButtonBruteForceSearchClick = () => {
    const response = [];
    for (let i = 0; i < randomData.length; i++) {
      const currentData = randomData[i];
      const t0 = performance.now();
      bruteForceSearch(currentData.array, currentData.target);
      const t1 = performance.now();
      const time = t1 - t0;
      response.push({ time, size: currentData.length });
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
          {randomData.length > 0
            ? randomData.map((item) => {
                return (
                  <>
                    <p> Array Size: {item.arraySize}</p>
                    <Variable value={item.array} name="Array" maxSize="10" />
                  </>
                );
              })
            : "Empty"}
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
