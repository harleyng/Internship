import express from 'express';

import { getDocuments, createDocument, createDocumentModel, updateDocument } from '../controllers/document.js';

const router = express.Router();


router.get('/', getDocuments);
router.post('/createDocument', createDocument);
router.get('/createDocumentModel/:studentID', createDocumentModel);
router.put('/updateDocument', updateDocument)



export default router;