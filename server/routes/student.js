import express from 'express';

import { getStudentUser, getStudents, createStudent, updateProfile, getProfile, getSupervisorStudents } from '../controllers/student.js';
import { authRole, authUser } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authUser, authRole(['staff', 'supervisor', 'council', 'lecturer']), getStudents);
router.post('/', authUser, authRole(['supervisor']), getSupervisorStudents)
router.get('/user/:userID', getStudentUser);
router.post('/new', authUser, authRole(['student']), createStudent);

router.post('/getProfile', authUser, authRole(['staff', 'student']), getProfile);
router.patch('/updateProfile', authUser, authRole(['staff', 'student', 'lecturer']), updateProfile);


export default router;