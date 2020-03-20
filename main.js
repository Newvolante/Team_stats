  // team object
let team = {
  _players: [                        // an array of the best players of the team
    {
      "first name": "Gianluca",
      "last name": "Pagliuca",
      age: 32
    },
    {
      "first name": "Giuseppe",
      "last name": "Bergomi",
      age: 35
    },
    {
      "first name": "Roberto",
      "last name": "Baggio",
      age: 31
    }
  ],
  _games: [                           // an array of games of the team
    {
      opponent: "Brescia",
      teamPoints: 2,
      opponentPoints: 1
    },
    {
      opponent: "Bologna",
      teamPoints: 4,
      opponentPoints: 2
    },
    {
      opponent: "Lecce",
      teamPoints: 5,
      opponentPoints: 1
    }
  ],
  get players() {                       // method to get the players
    return this._players;
    },
  get games() {                         // method to get the games
    return this._games;
    },
  addPlayer(firstName, lastName, age) { // method to add a player
    let player = {
      firstName,
      lastName,
      age
    }
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this._games.push(game);
  }
}

// adding players to the team
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

// logging the team players
console.log(team.players);

// adding games to the team object
team.addGame("Lazio", 1, 1);
team.addGame("Napoli", 0, 2);
team.addGame("Parma", 1, 0);

// logging the team players
console.log(team.games);



