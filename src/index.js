import { getUserAnswer, greeting } from './cli.js';

export const getRandomNum = (max = 10) => Math.floor(Math.random() * (max + 1));

export const gameEngine = (rules, getQuestionAndAnswer) => {
  const name = greeting();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
