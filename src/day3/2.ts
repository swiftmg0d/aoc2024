import {input} from '../input/input';

function getArr(regex: RegExp): Array<number> {
  const arr: Array<number> = [];
  for (const match of input.matchAll(regex)) {
    arr.push(match.index);
  }
  return arr;
}

const regex = /mul\((\d+),(\d+)\)/g;
const doRegex = /do\(\)/g;
const dontRegex = /don't\(\)/g;

let sum = 0;

const dontArrIndex = getArr(dontRegex);
const doArrIndex = getArr(doRegex);

for (const match of input.matchAll(regex)) {
  const lastDoIndex = doArrIndex
    .filter(i => i < match.index)
    .sort((a, b) => b - a)[0];
  const lastDontIndex = dontArrIndex
    .filter(i => i < match.index)
    .sort((a, b) => b - a)[0];

  if (lastDontIndex === undefined || lastDoIndex > lastDontIndex) {
    sum += Number(match[1]) * Number(match[2]);
  }
}
console.log(sum);
