#!/usr/bin/env node
import greeting from '../src/cli.js';
import game from '../src/games/brain-even.js';

const userName = greeting();
game(userName);
