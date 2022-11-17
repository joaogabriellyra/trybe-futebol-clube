import { Router } from 'express';
import Model from '../database/models/Teams';
import Service from '../services/teams.service';
import Controller from '../controllers/teams.controller';

const teamsRouter = Router();
const controller = new Controller(new Service(Model));

teamsRouter.get('/', (req, res) => controller.getTeams(req, res));
teamsRouter.get('/:id', (req, res) => controller.getTeamById(req, res));

export default teamsRouter;
