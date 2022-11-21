import { Router } from 'express';
import Controller from '../controllers/leaderboard.controller';
import Service from '../services/leaderborder.service';

const leaderBoardRouter = Router();
const controller = new Controller(new Service());

leaderBoardRouter.get('/home', (req, res) => controller.getHome(req, res));
leaderBoardRouter.get('/away', (req, res) => controller.getAway(req, res));
leaderBoardRouter.get('/', (req, res) => controller.getAll(req, res));

export default leaderBoardRouter;
