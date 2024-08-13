function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomUniqueArray(size) {
  const tempSet = new Set();
  while (tempSet.size < size) {
    tempSet.add(randomNumber(0, Number.MAX_SAFE_INTEGER));
  }

  const array = Array.from(tempSet);
  array.sort((a, b) => a - b);
  return array;
}

function avg(size, array) {
  let sum = [];
  array.forEach((item) => (sum += item));
  const response = sum / array.length;
  console.log("calculate avg", size, array, response);
  return response;
}

function median(size, array) {
  if (array.length == 0) return 0;
  array.sort((a, b) => a - b);

  const response = array[Math.floor(array.length / 2)];
  console.log("calculate median", size, array, response);
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
      return { index: m, counter };
    } else if (array[m] < target) {
      counter++;
      l = m + 1;
    } else {
      counter++;
      r = m - 1;
    }
  }
  return { index: -1, counter };
}

function bruteForceSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return { index: i, counter: i };
    }
  }
  return { index: -1, counter: array.length };
}

const generateData = () => {
  const NUMBER_OF_TESTS = 20;

  const newData = [];

  let counter = 0;
  while (newData.length < NUMBER_OF_TESTS) {
    counter++;

    const arraySize = Math.pow(2, counter);
    const array = randomUniqueArray(arraySize);
    const target = -1;
    console.log("generating array with size: ", array.length);

    newData.push({
      array,
      target,
    });
  }

  return newData;
};

// Function to perform some benchmarking task
function benchmarkTask() {
  console.log("Generating multiple arrays with random data");
  const randomData = generateData();

  console.log("Benchmark BinarySearch");
  const binarySearchData = benckMarkFunction(randomData, binarySearch);

  console.log("Benchmark BruteForceSearch");
  const bruteForceData = benckMarkFunction(randomData, bruteForceSearch);

  console.log("Preparing result");
  const result = [];

  result.push([
    "Array Size",
    "Brute Force",
    "Binary Search",
    "Brute Force (ms)",
    "Binary Search (ms)",
  ]);
  if (binarySearchData.length != bruteForceData.length) {
    throw new Error("Error generating result");
  }

  for (let i = 0; i < binarySearchData.length; i++) {
    result.push([
      bruteForceData[i].size.toString(),
      bruteForceData[i].time,
      binarySearchData[i].time,
      bruteForceData[i].timeMs,
      binarySearchData[i].timeMs,
    ]);
  }
  return result;
}

const benckMarkFunction = (randomData, fn) => {
  const NUMBER_OF_EXECUTIONS = 1000;

  const response = [];

  for (let i = 0; i < randomData.length; i++) {
    let times = [];
    const currentData = randomData[i];
    let counter = null;
    for (let j = 1; j <= NUMBER_OF_EXECUTIONS; j++) {
      const startTime = performance.now();
      const response = fn(currentData.array, currentData.target);
      const endTime = performance.now();
      times.push(1 + (endTime - startTime) * 10000);
      if (counter === null) {
        counter = response.counter;
      }
    }

    const size = currentData.array.length;
    response.push({ time: counter, timeMs: median(size, times), size });
  }

  return response;
};

// Listen for messages from the main thread
self.onmessage = function (event) {
  if (event.data.command === "start") {
    const result = benchmarkTask();
    // Send the result back to the main thread
    self.postMessage(result);
  }
};
