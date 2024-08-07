export function createTracer() {
  const execution = {
    runs: [],
    output: null,
  };
  let currentStep = -1;

  return {
    logger: (text) => {
      execution.runs[currentStep].logger.push(text);
    },
    saveVariables: (vars) => {
      execution.runs[currentStep].localVariables = vars;
    },
    newStep: () => {
      currentStep++;
      execution.runs[currentStep] = {
        localVariables: [],
        logger: [],
      };
    },
    saveResult: (value) => {
      execution.output = value;
    },
    getState: () => {
      return execution;
    },
  };
}
