import express from 'express';

import { getScores, createScore, updateScore } from '../controllers/score.js';

const router = express.Router();


router.get('/', getScores);
router.get('/:studentID', createScore)
router.post('/:studentID', updateScore)



export default router;