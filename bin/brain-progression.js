#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import { rules, gameProgression } from '../src/games/game-progression.js';

gameEngine(rules, gameProgression);
