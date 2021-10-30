import { getRandomNum } from '../index.js';

export const rules = 'What is the result of the expression?';

export const gameCalc = () => {
  const operations = ['+', '-', '*'];
  const operand1 = getRandomNum();
  const operand2 = getRandomNum();
  const operation = operations[getRandomNum(operations.length - 1)];
  const question = `${operand1} ${operation} ${operand2}`;
  let answer;
  switch (operation) {
    case '+':
      answer = operand1 + operand2;
      break;
    case '-':
      answer = operand1 - operand2;
      break;
    case '*':
      answer = operand1 * operand2;
      break;
    default:
  }

  return [question, String(answer)];
};
