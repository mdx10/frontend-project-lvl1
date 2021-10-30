import { getRandomNum } from '../index.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const gameEven = () => {
  const question = getRandomNum(100);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};
