import { Router } from 'express';
import { validateLogin, validateToken } from '../middlewares/login.validate';
import Controller from '../controllers/login.controller';
import Service from '../services/login.service';
import Model from '../database/models/Users';

const loginRouter = Router();
const controller = new Controller(new Service(Model));

loginRouter.post('/', validateLogin, (req, res) => controller.getLogin(req, res));
loginRouter.get('/validate', validateToken, (req, res) => controller.getRole(req, res));

export default loginRouter;
