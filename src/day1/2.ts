import {input} from '../input/input';

const leftArray: Array<number> = input
  .split('\n')
  .map(value => Number(value.split(/\s+/)[0]));

const rightArray: Array<number> = input
  .split('\n')
  .map(value => Number(value.split(/\s+/)[1]));

const result = leftArray.reduce((prev, curr) => {
  const count = rightArray.filter(value => value === curr).length;
  return prev + curr * count;
}, 0);

console.log(result);
