const express = require(`express`);

const endpoints = require(`endpoints/queens`);
const { queryLimit } = require('middleware');

const router = express.Router();

router.get(`/`, [queryLimit], endpoints.getQueens);
router.get(`/congeniality`, [queryLimit], endpoints.getCongeniality);
router.get(`/winners`, [queryLimit], endpoints.getWinners);
router.get(`/:id`, endpoints.getQueenById);

router.post(`/create`, endpoints.create);
router.put(`/:id/update`, endpoints.update);
router.delete(`/:id/delete`, endpoints.delete);

module.exports = router;
