import getRandomNum from '../lib.js';
import runEngine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const question = getRandomNum(100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => runEngine(gameRules, generateGameData);
