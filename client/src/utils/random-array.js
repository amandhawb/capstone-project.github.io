import { randomNumber } from "./random-number";

export function randomUniqueArray(size, minValue, maxValue) {
  if (maxValue - minValue < size) {
    throw new Error("Invalid call for randomUniqueArray");
  }

  const tempSet = new Set();
  while (tempSet.size < size) {
    tempSet.add(randomNumber(minValue, maxValue));
  }

  const array = Array.from(tempSet);
  array.sort((a, b) => a - b);
  //console.log('randomUniqueArray', array);
  return array;
}

export function randomArray(size, minValue, maxValue) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(randomNumber(minValue, maxValue));
  }
  array.sort((a, b) => a - b);
  return array;
}
