#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import { rules, gamePrime } from '../src/games/game-prime.js';

gameEngine(rules, gamePrime);
