import { Request, Response } from 'express';
import Service from '../services/matches.service';

export default class Controller {
  constructor(private service: Service) {}

  async getAllMatches(req: Request, res: Response) {
    try {
      const { inProgress } = req.query;
      if (inProgress) {
        const matches = await this.service.getMatchesInProgress(inProgress as string);
        return res.status(200).json(matches);
      }
      const matches = await this.service.getMatches();
      return res.status(200).json(matches);
    } catch (error) {
      const err = error as Error;
      return res.status(401).json({ message: err.message });
    }
  }

  async createNewMatch(req: Request, res: Response) {
    try {
      const newMatch = await this.service.createMatch({ ...req.body, inProgress: true });
      res.status(201).json(newMatch);
    } catch (error) {
      const err = error as Error;
      res.status(422).json({ message: err.message });
    }
  }

  async finishMatch(req: Request, res: Response) {
    try {
      await this.service.finishMatch(req.params.id);
      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      const err = error as Error;
      res.status(404).json({ message: err.message });
    }
  }

  async updateMatch(req: Request, res: Response) {
    try {
      const updatedMatch = await this.service.updateMatch(req.params.id, req.body);
      res.status(200).json(updatedMatch);
    } catch (error) {
      const err = error as Error;
      res.status(404).json({ message: err.message });
    }
  }
}
