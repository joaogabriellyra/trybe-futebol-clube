import { NextFunction, Request, Response } from 'express';

const validateTeams = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  if (homeTeam === awayTeam) {
    return res.status(422).json(
      { message: 'It is not possible to create a match with two equal teams' },
    );
  }
  if (homeTeam > 16 || awayTeam > 16) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  next();
};

export default validateTeams;
