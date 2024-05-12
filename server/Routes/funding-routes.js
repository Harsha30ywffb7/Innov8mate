import express from 'express'
import addCompany from '../controllers/funding/addcompany.js'
import getCompanies from '../controllers/funding/companies.js';

const router = express.Router();

router.post('/addcompany',addCompany);

router.get('/', getCompanies);

export default router;