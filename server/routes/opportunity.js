import express from 'express';

import { getOpportunities, createOpportunity, getOpportunity, updateOpportunity, deleteOpportunity } from '../controllers/opportunity.js'
import { authRole, authUser } from '../middleware/auth.js';

const router = express.Router();
 
router.get('/', authUser, authRole(['staff', 'student']), getOpportunities);
router.post('/create', authUser, authRole(['staff']), createOpportunity);
router.get('/:opportunityID/detail', authUser, authRole(['staff', 'student']), getOpportunity);
router.put('/:opportunityID/update', authUser, authRole(['staff']), updateOpportunity);
router.delete('/:opportunityID/delete', authUser, authRole(['staff']), deleteOpportunity);

export default router;