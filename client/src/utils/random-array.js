import { randomNumber } from "./random-number";

export function randomArray(size, minValue, maxValue) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(randomNumber(minValue, maxValue));
  }
  return array;
}
