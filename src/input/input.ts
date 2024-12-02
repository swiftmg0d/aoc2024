import * as fs from 'fs';
import {arch} from 'os';
const fileName = 'src/input/input.txt';

export async function getData(): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
