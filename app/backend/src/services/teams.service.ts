import Teams from '../database/models/Teams';

export default class Team {
  constructor(private model: typeof Teams) { }
  async getTeams() {
    const teams = await this.model.findAll();
    return teams;
  }

  async getTeamById(teamId: number) {
    const team = await this.model.findOne({
      where: { id: teamId },
    });
    return team;
  }
}
