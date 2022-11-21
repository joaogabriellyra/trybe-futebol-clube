import { Request, Response } from 'express';
import Service from '../services/leaderborder.service';

export default class Controller {
  constructor(private service: Service) {}

  async getHome(req: Request, res: Response) {
    try {
      const teams = await this.service.getHome();
      return res.status(200).json(teams);
    } catch (error) {
      const err = error as Error;
      return res.status(401).json({ message: err.message });
    }
  }

  async getAway(req: Request, res: Response) {
    try {
      const teams = await this.service.getAway();
      return res.status(200).json(teams);
    } catch (error) {
      const err = error as Error;
      return res.status(401).json({ message: err.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const teams = await this.service.getAll();
      return res.status(200).json(teams);
    } catch (error) {
      const err = error as Error;
      return res.status(401).json({ message: err.message });
    }
  }
}
