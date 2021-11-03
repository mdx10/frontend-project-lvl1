import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = (operand1, operand2, operation) => {
  switch (operation) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const generateGameData = () => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const operation = operations[getRandomNumber(operations.length - 1)];

  const question = `${operand1} ${operation} ${operand2}`;
  const answer = calculate(operand1, operand2, operation);

  return [question, String(answer)];
};

export default () => runEngine(gameRules, generateGameData);
