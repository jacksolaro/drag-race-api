'use strict';

const db = require('./db');

const Challenge = require('./Challenge');
const Episode = require('./Episode');
const Season = require('./Season');
const Queen = require('./Queen');
const QueensChallenges = require('./QueensChallenges');
const QueensSeasons = require('./QueensSeasons');

Challenge.hasMany(Queen, { through: 'ChallengeWinners', foreignkey: 'challengeId' });
Queen.belongsToMany(Challenge, { through: 'ChallengeWinners', foreignKey: 'queenId' })

Challenge.belongsTo(Episode, { foreignkey: 'challengeId' });
Episode.hasMany(Challenge, { foreignkey: 'episodeId' });

Challenge.hasMany(Queen, { through: QueensChallenges, foreignkey: 'challengeId' });
Queen.belongsToMany(Challange, { through: QueensChallenges, foreignKey: 'queenId' });

Queen.belongsToMany(Episode, { through: 'QueensEpisodes', foreignkey: 'queenId' });
Episode.belongsToMany(Queen, { through: 'QueensEpisodes', foreignKey: 'episodeId' });

Queen.belongsToMany(Season, { through: QueensSeasons, foreignKey: 'queenId' });
Season.belongsToMany(Queen, { through: QueensSeasons, foreignKey: 'seasonId' });

Episode.belongsTo(Season, { foreignKey: 'seasonId'});
Season.hasMany(Episode, { foreignKey: 'seasonId' });



const model = db.sync();

module.exports = {
  db,
  model,
  Challenge,
  Episode,
  Season,
  Queen,
};
