export default class Tracer {
  constructor() {
    this.runs = [];
    this.output = null;
    this.currentStep = -1;
  }

  logger(text) {
    if (this.currentStep === -1) {
      throw new Error("Tracer Not Initialized - You must create a step");
    }
    const currentRun = this.runs[this.currentStep];
    currentRun.logger.push(text);
  }

  saveVariables(vars) {
    if (this.currentStep === -1) {
      throw new Error("Tracer Not Initialized - You must create a step");
    }
    const currentRun = this.runs[this.currentStep];

    vars.forEach(({ name, value }) => {
      currentRun.localVariables.set(name, value);
    });
  }

  clearVariables() {
    if (this.currentStep === -1) {
      throw new Error("Tracer Not Initialized - You must create a step");
    }

    const currentRun = this.runs[this.currentStep];
    currentRun.localVariables = new Map();
  }

  newStep() {
    const previousRun =
      this.currentStep >= 0 ? this.runs[this.currentStep] : null;

    const previousLogger = previousRun ? previousRun.logger : [];
    const previousLocalVariables = previousRun
      ? previousRun.localVariables
      : new Map();

    const previousLine = previousRun ? previousRun.previousLine : 0;

    this.currentStep++;

    this.runs[this.currentStep] = {
      localVariables: new Map(previousLocalVariables),
      logger: [...previousLogger],
      line: previousLine,
    };
  }

  saveResult(value) {
    this.output = value;
  }

  getState() {
    return {
      runs: this.runs,
      output: this.output,
    };
  }
}
