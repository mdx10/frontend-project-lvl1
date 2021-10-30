import { getRandomNum } from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const gamePrime = () => {
  const question = getRandomNum(100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
