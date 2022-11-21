import { teams } from './teamsLeaderBoard';

const matchVictory = (name: string, awayTeamGoals: number, homeTeamGoals: number) => {
  let ind = 0;
  teams.forEach((team, index) => {
    if (team.name === name) {
      ind = index;
    }
  });
  teams[ind].totalPoints += 3;
  teams[ind].totalGames += 1;
  teams[ind].totalVictories += 1;
  teams[ind].goalsFavor += awayTeamGoals;
  teams[ind].goalsOwn += homeTeamGoals;
  teams[ind].goalsBalance += awayTeamGoals - homeTeamGoals;
};
const matchDraw = (name: string, awayTeamGoals: number, homeTeamGoals: number) => {
  let inde = 0;
  teams.forEach((team, index) => {
    if (team.name === name) {
      inde = index;
    }
  });
  teams[inde].totalPoints += 1;
  teams[inde].totalGames += 1;
  teams[inde].totalDraws += 1;
  teams[inde].goalsFavor += awayTeamGoals;
  teams[inde].goalsOwn += homeTeamGoals;
};
const matchLose = (name: string, awayTeamGoals: number, homeTeamGoals: number) => {
  let indx = 0;
  teams.forEach((team, index) => {
    if (team.name === name) {
      indx = index;
    }
  });
  teams[indx].totalGames += 1;
  teams[indx].totalLosses += 1;
  teams[indx].goalsFavor += awayTeamGoals;
  teams[indx].goalsOwn += homeTeamGoals;
  teams[indx].goalsBalance += awayTeamGoals - homeTeamGoals;
};

const resetEverything = (condition: boolean) => {
  if (condition) {
    return null;
  }
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

const calculatingAwayTeams = (array: any, condition: boolean) => {
  resetEverything(condition);
  array.map((match: any) => {
    if (match.homeTeamGoals < match.awayTeamGoals) {
      matchVictory(match.teamAway.teamName, match.awayTeamGoals, match.homeTeamGoals);
      return null;
    }
    if (match.homeTeamGoals === match.awayTeamGoals) {
      matchDraw(match.teamAway.teamName, match.awayTeamGoals, match.homeTeamGoals);
      return null;
    }
    if (match.homeTeamGoals > match.awayTeamGoals) {
      matchLose(match.teamAway.teamName, match.awayTeamGoals, match.homeTeamGoals);
    }
    return null;
  });
  teams.forEach((team, index) => {
    teams[index].efficiency = String(((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2));
  });
};

const organizedTeams = () => teams.sort((a, b) => {
  let output = b.totalPoints - a.totalPoints;
  if (!output) {
    output = b.totalVictories - a.totalVictories;
  }
  if (!output) {
    output = b.goalsBalance - a.goalsBalance;
  }
  if (!output) {
    output = b.goalsFavor - a.goalsFavor;
  }
  return output;
});

export { calculatingAwayTeams, organizedTeams };
