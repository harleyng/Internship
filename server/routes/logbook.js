import express from 'express';

// PLAN
import { createPlan, getPlan, createPlanPeriod, updatePlanPeriod, deletePlanPeriod } from '../controllers/plan.js';
import { createTask, getTask, createTaskList, createTaskCard, updateTaskCard, deleteTaskCard, sort } from '../controllers/task.js';

const router = express.Router();

// PLAN
router.get('/plan/create/:studentID', createPlan);
router.get('/plan/:studentID', getPlan);
router.post('/plan/period/create/:studentID/:taskID', createPlanPeriod)
router.patch('/plan/period/update/:studentID', updatePlanPeriod)
router.put('/plan/period/delete/:studentID/:taskID', deletePlanPeriod)

// TASK
router.get('/task/create/:taskID', createTask)
router.get('/task/:taskID', getTask)
router.post('/task/:taskID/list/create', createTaskList)
router.post('/task/:taskID/list/:listID/card/create', createTaskCard)
router.patch('/task/:taskID/list/:listID/card/update', updateTaskCard)
router.patch('/task/:taskID/list/:listID/card/delete', deleteTaskCard)
router.put('/task/sort', sort)

export default router;