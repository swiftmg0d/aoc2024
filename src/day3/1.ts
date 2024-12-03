import {input} from '../input/input';

const regex = /mul\((\d+),(\d+)\)/g;

let sum = 0;

for (const match of input.matchAll(regex)) {
  sum += Number(match[1]) * Number(match[2]);
}
console.log(sum);
