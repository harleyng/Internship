import express from 'express';

import { getScores, createScore, updateScore, getEvaluation, updateEvaluation } from '../controllers/score.js';

const router = express.Router();


router.get('/', getScores);
router.get('/:studentID', createScore)
router.post('/:studentID', updateScore)
router.get('/council/:studentID', getEvaluation)
router.post('/council/:studentID', updateEvaluation)



export default router;