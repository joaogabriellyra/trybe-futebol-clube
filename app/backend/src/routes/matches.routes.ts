import { Router } from 'express';
import Model from '../database/models/Matches';
import Service from '../services/matches.service';
import Controller from '../controllers/matches.controller';
import validateTeams from '../middlewares/teams.validate';
import { validateToken } from '../middlewares/login.validate';

const matchesRouter = Router();
const controller = new Controller(new Service(Model));

matchesRouter.get('/', (req, res) => controller.getAllMatches(req, res));
matchesRouter.post(
  '/',
  validateToken,
  validateTeams,
  (req, res) => controller.createNewMatch(req, res),
);
matchesRouter.patch('/:id/finish', (req, res) => controller.finishMatch(req, res));
matchesRouter.patch('/:id', (req, res) => controller.updateMatch(req, res));

export default matchesRouter;
