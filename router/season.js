const express = require(`express`);
const router = express.Router();

const { adminRoute } = require('middleware');

const seasonEndpoints = require('endpoints/seasons');
const episodeEndpoints = require('endpoints/episodes');
const challengesEndpoints = require('endpoints/challenges');


router.get(`/`, seasonEndpoints.getSeasons);
router.get(`/:id`, seasonEndpoints.getSeasonById);
router.get(`/:id/queens`, seasonEndpoints.getSeasonQueens);
router.get(`/:id/episodes`, episodeEndpoints.getEpisodesBySeason);
router.get(`/:id/challenges`, challengesEndpoints.getSeasonChallenges);
router.post(`/create`, [adminRoute], seasonEndpoints.create);

module.exports = router;
