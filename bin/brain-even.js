#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import { rules, gameEven } from '../src/games/game-even.js';

gameEngine(rules, gameEven);
