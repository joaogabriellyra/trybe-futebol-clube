import { Response, Request } from 'express';
import Service from '../services/teams.service';

export default class Controller {
  constructor(private service: Service) {}

  async getTeams(_req: Request, res: Response) {
    try {
      const teams = await this.service.getTeams();
      return res.status(200).json(teams);
    } catch (error) {
      const err = error as Error;
      return res.status(401).json({ message: err.message });
    }
  }

  async getTeamById(req: Request, res: Response) {
    try {
      const team = await this.service.getTeamById(Number(req.params.id));
      return res.status(200).json(team);
    } catch (error) {
      const err = error as Error;
      return res.status(401).json({ message: err.message });
    }
  }
}
