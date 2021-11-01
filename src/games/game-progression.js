import getRandomNum from '../lib.js';
import runEngine from '../index.js';

const gameRules = 'What number is missing in the progression?';

const getRandomProgression = () => {
  const progression = [];
  const progressionLength = 10;
  let startProgression = getRandomNum(100);
  const interval = getRandomNum(10);

  for (let i = 0; i < progressionLength; i += 1) {
    startProgression += interval;
    progression.push(startProgression);
  }

  return progression;
};

const generateGameData = () => {
  const progression = getRandomProgression();
  const randomIndex = getRandomNum(progression.length - 1);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, String(answer)];
};

export default () => runEngine(gameRules, generateGameData);
