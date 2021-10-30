#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import { rules, gameCalc } from '../src/games/game-calc.js';

gameEngine(rules, gameCalc);
