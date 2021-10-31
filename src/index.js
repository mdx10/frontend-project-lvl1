import { getUserAnswer, greet } from './cli.js';

export const getRandomNum = (max = 10) => Math.floor(Math.random() * (max + 1));

export const gameEngine = (rules, getQuestionAndAnswer) => {
  const userName = greet();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
