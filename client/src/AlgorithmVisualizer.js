import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import LocalVariables from "./LocalVariables";
import Canvas from "./Canvas";
import Logger from "./Logger";

import { randomUniqueArray } from "./utils/random-array";
import { randomNumber } from "./utils/random-number";

// Register the JavaScript language
SyntaxHighlighter.registerLanguage("javascript", js);

const arraySize = 10;
const minValue = 1;
const maxValue = 50;

const AlgorithmVisualizer = (props) => {
  const { inputFunction, code, title } = props;

  let [currentStep, setCurrentStep] = useState(0);
  let [runs, setRuns] = useState([]);
  let [, setOutput] = useState(null);
  //let [inputVariables, setInputVariables] = useState([]);

  const handleRunCodeOnClick = () => {
    // generate random input
    const array = randomUniqueArray(arraySize, minValue, maxValue);
    const randomPos = randomNumber(0, arraySize - 1);
    const target = array[randomPos];

    const inputArgument = [
      { name: "array", value: array },
      { name: "target", value: target },
    ];

    // execute code
    const response = inputFunction.apply(
      null,
      inputArgument.map((item) => item.value),
    );

    //setInputVariables(inputArgument);
    setRuns(response.runs);
    setCurrentStep(0);
    setOutput(response.output);
  };

  const handlePreviousStepOnClick = () => {
    if (currentStep > 0) {
      setCurrentStep((prevValue) => prevValue - 1);
    }
  };

  const handleNextStepOnClick = () => {
    if (currentStep < runs.length - 1) {
      setCurrentStep((prevValue) => prevValue + 1);
    }
  };

  return (
    <div style={styles.main}>
      <header style={styles.header}>
        <h1>{title}</h1>
      </header>
      <SyntaxHighlighter
        language="javascript"
        style={monokai}
        showLineNumbers={true}
      >
        {code}
      </SyntaxHighlighter>
      <div style={styles.container}>
        <button style={styles.button} onClick={handleRunCodeOnClick}>
          Generate Random Datan and Run Code
        </button>
      </div>
      {runs.length > 0 && (
        <div style={styles.container}>
          <button style={styles.button} onClick={handlePreviousStepOnClick}>
            prev
          </button>
          Steps - {currentStep + 1} of {runs.length}
          <button style={styles.button} onClick={handleNextStepOnClick}>
            next
          </button>
        </div>
      )}
      {runs.length > 0 && (
        <Canvas variables={Array.from(runs[currentStep].localVariables)} />
      )}
      {/*runs.length > 0 && (
        <Variables title="Input Variables" variables={inputVariables} />
      )*/}
      {runs.length > 0 && (
        <LocalVariables
          variables={Array.from(runs[currentStep].localVariables)}
        />
      )}
      {runs.length > 0 && <Logger logger={runs[currentStep].logger} />}
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
  button: {
    padding: "5px",
    margin: "5px",
  },
  header: {
    backgroundColor: "#FFC0CB",
    color: "white",
    padding: "10px 0",
    textAlign: "center",
  },
  footer: {
    textAlign: "center",
    borderTop: "1px solid #ddd",
    paddingTop: "10px",
  },
};

export default AlgorithmVisualizer;
