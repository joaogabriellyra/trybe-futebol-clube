import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import calculatingTeams from '../utils/calculatingTeamsLeaderBoard';
import { calculatingAwayTeams, organizedTeams } from '../utils/calculatingAwayTeams';

export default class LeaderBoard {
  matchs = Matches;
  teams = Teams;
  async getHome() {
    const matches = await this.matchs.findAll({
      where: { inProgress: false },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    calculatingTeams(matches);
    const result = organizedTeams();
    return result;
  }

  async getAway() {
    const matches = await this.matchs.findAll({
      where: { inProgress: false },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    calculatingAwayTeams(matches, false);
    const result = organizedTeams();
    return result;
  }

  async getAll() {
    const matches = await this.matchs.findAll({
      where: { inProgress: false },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    calculatingTeams(matches);
    calculatingAwayTeams(matches, true);
    const result = organizedTeams();
    return result;
  }
}
