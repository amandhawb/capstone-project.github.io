import React from "react";
import { useState } from "react";
import Graph from "./Graph";

const Benchmarks = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleButtonRunClick = () => {
    setLoading(true);
    setResult(null);

    // Create a new Web Worker
    const worker = new Worker(`/js/worker.js`);

    // Send a message to the worker to start the benchmark
    worker.postMessage({ command: "start" });

    // Handle messages received from the worker
    worker.onmessage = function (event) {
      setResult(event.data);
      setLoading(false);
      worker.terminate(); // Stop the worker once done
    };

    // Handle errors
    worker.onerror = function (error) {
      console.error("Worker error:", error);
      setLoading(false);
      worker.terminate(); // Stop the worker on error
    };
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
        <button onClick={handleButtonRunClick} disabled={loading}>
          {loading ? "Benchmarking..." : "Start Benchmark"}
        </button>
      </div>
      <div style={styles.container}>
        {result !== null && <Graph data={result} />}
        <div></div>
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
