import express from 'express';

// PLAN
import { createPlan, getPlan, createPlanPeriod } from '../controllers/plan.js';
import { createTask, getTask, createTaskList, createTaskCard, sort } from '../controllers/task.js';

const router = express.Router();

// PLAN
router.get('/plan/create/:studentID', createPlan);
router.get('/plan/:studentID', getPlan);
router.post('/plan/period/create/:studentID/:taskID', createPlanPeriod)

// TASK
router.get('/task/create/:taskID', createTask)
router.get('/task/:taskID', getTask)
router.post('/task/:taskID/list/create', createTaskList)
router.post('/task/:taskID/list/:listID/card/create', createTaskCard)
router.put('/task/sort', sort)

export default router;