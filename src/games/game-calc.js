import getRandomNum from '../lib.js';
import runEngine from '../index.js';

const gameRules = 'What is the result of the expression?';

const calculate = (operand1, operand2, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    // no default
  }

  return result;
};

const generateGameData = () => {
  const operations = ['+', '-', '*'];
  const operand1 = getRandomNum();
  const operand2 = getRandomNum();
  const operation = operations[getRandomNum(operations.length - 1)];

  const question = `${operand1} ${operation} ${operand2}`;
  const answer = calculate(operand1, operand2, operation);

  return [question, String(answer)];
};

export default () => runEngine(gameRules, generateGameData);
