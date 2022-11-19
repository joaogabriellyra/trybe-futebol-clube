import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

export default class MatchesService {
  constructor(private model: typeof Matches) {}

  async getMatches() {
    const matches = await this.model.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  async getMatchesInProgress(inProgress: string) {
    const progress = inProgress === 'true';
    const matches = await this.model.findAll({
      where: { inProgress: progress },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  async createMatch(match: Matches) {
    const newMatch = this.model.create(match);
    return newMatch;
  }

  async finishMatch(id: string) {
    this.model.update(
      { inProgress: false },
      { where: { id } },
    );
  }

  async updateMatch(id: string, match: Matches) {
    const updatedMatch = this.model.update(match, { where: { id } });
    return updatedMatch;
  }
}
