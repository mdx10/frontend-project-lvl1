import { getRandomNum } from '../index.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export const rules = 'Find the greatest common divisor of given numbers.';

export const gameGcd = () => {
  const num1 = getRandomNum(100);
  const num2 = getRandomNum(100);

  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2);
  return [question, String(answer)];
};
