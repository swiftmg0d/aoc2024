import * as fs from 'fs';

export const input: string = fs.readFileSync('./src/input/input.txt', {
  encoding: 'utf8',
  flag: 'r',
});
