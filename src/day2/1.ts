import {getData} from '../input/input';

getData()
  .then(value => {
    const arr: Array<Array<string>> = value
      .split('\n')
      .map(value => value.split(' '));

    let sum = 0;

    interface Model {
      above: boolean;
      isAsc: Array<boolean>;
      isDes: Array<boolean>;
    }

    function checkConstraints(rules: Model, value: string[]) {
      value.forEach((curr, index) => {
        const nextNumber = index + 1;

        if (nextNumber < value.length) {
          const firstNumber = Number(curr);
          const secondNumber = Number(value[nextNumber]);
          const diff = Math.abs(firstNumber - secondNumber);

          firstNumber > secondNumber
            ? rules.isAsc.push(true)
            : rules.isAsc.push(false);

          firstNumber < secondNumber
            ? rules.isDes.push(true)
            : rules.isDes.push(false);

          diff === 0 || diff > 3 ? (rules.above = true) : null;
        }
      });
      return rules;
    }

    function checkIsAsc0rDes(isAsc: Array<boolean>, isDes: Array<boolean>) {
      const rule1 =
        isAsc.filter(value => value === true).length === isAsc.length &&
        isDes.filter(value => value === false).length === isDes.length;
      const rule2 =
        isDes.filter(value => value === true).length === isDes.length &&
        isAsc.filter(value => value === false).length === isAsc.length;

      return rule1 || rule2;
    }

    function isSafe(value: string[]): boolean {
      const rules: Model = {
        above: false,
        isAsc: [],
        isDes: [],
      };

      checkConstraints(rules, value);

      if (rules.above === false && checkIsAsc0rDes(rules.isAsc, rules.isDes)) {
        return true;
      }
      return false;
    }

    arr.forEach(value => {
      if (isSafe(value)) {
        sum += 1;
      }
    });

    console.log(sum);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
