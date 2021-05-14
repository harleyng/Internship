import express from 'express';

import { getStudentUser, getStudents, createStudent, updateProfile, getProfile } from '../controllers/student.js';

const router = express.Router();

router.get('/', getStudents);
router.get('/user/:userID', getStudentUser);
router.post('/new', createStudent);

router.post('/getProfile', getProfile);
router.put('/updateProfile', updateProfile);


export default router;