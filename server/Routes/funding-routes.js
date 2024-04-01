import express from 'express'
import addCompany from '../controllers/funding/addcompany.js'

const router = express.Router();

router.post('/addcompany',addCompany);

export default router;