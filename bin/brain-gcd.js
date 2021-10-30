#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import { rules, gameGcd } from '../src/games/game-gcd.js';

gameEngine(rules, gameGcd);
