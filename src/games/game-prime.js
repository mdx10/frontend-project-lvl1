import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const generateGameData = () => {
  const question = getRandomNumber(100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => runEngine(gameRules, generateGameData);
