import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const gameRules = 'What number is missing in the progression?';
const progressionLength = 10;

const getRandomProgression = () => {
  const progression = [];
  let startProgression = getRandomNumber(100);
  const interval = getRandomNumber();

  for (let i = 0; i < progressionLength; i += 1) {
    startProgression += interval;
    progression.push(startProgression);
  }

  return progression;
};

const hideElement = (arr, index) => {
  const progression = [...arr];
  progression[index] = '..';
  return progression.join(' ');
};

const generateGameData = () => {
  const progression = getRandomProgression();
  const randomIndex = getRandomNumber(progression.length - 1);

  const question = hideElement(progression, randomIndex);
  const answer = progression[randomIndex];

  return [question, String(answer)];
};

export default () => runEngine(gameRules, generateGameData);
