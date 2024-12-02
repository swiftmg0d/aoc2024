import {getData} from '../input/input';

import * as fs from 'fs';

getData()
  .then(value => {
    const leftArray: Array<number> = value
      .split('\n')
      .map(value => Number(value.split(/\s+/)[0]));
    const rightArray: Array<number> = value
      .split('\n')
      .map(value => Number(value.split(/\s+/)[1]));

    const result = leftArray.reduce((prev, curr) => {
      const count = rightArray.filter(value => value === curr).length;
      return prev + curr * count;
    }, 0);

    console.log(result);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
