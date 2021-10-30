import { getRandomNum } from '../index.js';

const getRandomProgression = () => {
  const progression = [];
  let startProgression = getRandomNum(100);
  const interval = getRandomNum(10);
  for (let i = 0; i < 10; i += 1) {
    startProgression += interval;
    progression.push(startProgression);
  }

  return progression;
};

export const rules = 'What number is missing in the progression?';

export const gameProgression = () => {
  const progression = getRandomProgression();
  const randomIndex = getRandomNum(progression.length - 1);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, String(answer)];
};
