import express from 'express';

import { getStudentList, createStudent, updateProfile, getProfile } from '../controllers/student.js';

const router = express.Router();

router.get('/', getStudentList);
router.post('/new', createStudent);

router.post('/getProfile', getProfile);
router.put('/updateProfile', updateProfile);



export default router;