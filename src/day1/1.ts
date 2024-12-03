import {input} from '../input/input';

interface Model {
  sum: number;
  arr: Array<number>;
}

const leftArray: Array<number> = input
  .split('\n')
  .map(value => Number(value.split(/\s+/)[0]))
  .sort((a, b) => b - a);

const rightArray: Array<number> = input
  .split('\n')
  .map(value => Number(value.split(/\s+/)[1]))
  .sort((a, b) => a - b);

const initivalValues: Model = {
  sum: 0,
  arr: rightArray.slice(),
};

const result = leftArray.reduce((prev: Model, curr) => {
  const poppedValue = prev.arr.pop() || 0;
  return {
    sum: prev.sum + Math.abs(poppedValue - curr),
    arr: prev.arr,
  };
}, initivalValues);

console.log(result.sum);
