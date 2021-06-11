import express from 'express';

import { getStudentUser, getStudents, createStudent, updateProfile, getProfile, getSupervisorStudents } from '../controllers/student.js';

const router = express.Router();

router.get('/', getStudents);
router.post('/', getSupervisorStudents)
router.get('/user/:userID', getStudentUser);
router.post('/new', createStudent);

router.post('/getProfile', getProfile);
router.patch('/updateProfile', updateProfile);


export default router;