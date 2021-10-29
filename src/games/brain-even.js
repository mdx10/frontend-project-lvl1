import readlineSync from 'readline-sync';

const game = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.round(Math.random() * 100);

    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
