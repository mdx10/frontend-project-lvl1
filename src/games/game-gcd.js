import getRandomNum from '../lib.js';
import runEngine from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) return a;

  return gcd(b, a % b);
};

const generateGameData = () => {
  const number1 = getRandomNum(100);
  const number2 = getRandomNum(100);

  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2);

  return [question, String(answer)];
};

export default () => runEngine(gameRules, generateGameData);
