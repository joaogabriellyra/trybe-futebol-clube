import { teams } from './teamsLeaderBoard';

const matchVictory = (name: string, homeTeamGoals: number, awayTeamGoals: number) => {
  let ind = 0;
  teams.forEach((team, index) => {
    if (team.name === name) {
      ind = index;
    }
  });
  teams[ind].totalPoints += 3;
  teams[ind].totalGames += 1;
  teams[ind].totalVictories += 1;
  teams[ind].goalsFavor += homeTeamGoals;
  teams[ind].goalsOwn += awayTeamGoals;
  teams[ind].goalsBalance += homeTeamGoals - awayTeamGoals;
};
const matchDraw = (name: string, homeTeamGoals: number, awayTeamGoals: number) => {
  let inde = 0;
  teams.forEach((team, index) => {
    if (team.name === name) {
      inde = index;
    }
  });
  teams[inde].totalPoints += 1;
  teams[inde].totalGames += 1;
  teams[inde].totalDraws += 1;
  teams[inde].goalsFavor += homeTeamGoals;
  teams[inde].goalsOwn += awayTeamGoals;
};
const matchLose = (name: string, homeTeamGoals: number, awayTeamGoals: number) => {
  let indx = 0;
  teams.forEach((team, index) => {
    if (team.name === name) {
      indx = index;
    }
  });
  teams[indx].totalGames += 1;
  teams[indx].totalLosses += 1;
  teams[indx].goalsFavor += homeTeamGoals;
  teams[indx].goalsOwn += awayTeamGoals;
  teams[indx].goalsBalance += homeTeamGoals - awayTeamGoals;
};

const resetEverything = () => {
  teams.forEach((_t, index) => {
    teams[index].totalPoints = 0;
    teams[index].totalGames = 0;
    teams[index].totalVictories = 0;
    teams[index].totalDraws = 0;
    teams[index].totalLosses = 0;
    teams[index].goalsFavor = 0;
    teams[index].goalsOwn = 0;
    teams[index].goalsBalance = 0;
    teams[index].efficiency = '0.00';
  });
};

const calculatingTeams = (array: any) => {
  resetEverything();
  array.map((match: any) => {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      matchVictory(match.teamHome.teamName, match.homeTeamGoals, match.awayTeamGoals);
      return null;
    }
    if (match.homeTeamGoals === match.awayTeamGoals) {
      matchDraw(match.teamHome.teamName, match.homeTeamGoals, match.awayTeamGoals);
      return null;
    }
    if (match.homeTeamGoals < match.awayTeamGoals) {
      matchLose(match.teamHome.teamName, match.homeTeamGoals, match.awayTeamGoals);
    }
    return null;
  });
  teams.forEach((team, index) => {
    teams[index].efficiency = String(((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2));
  });
};

export default calculatingTeams;
