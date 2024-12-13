import express from 'express'
import addCompany from '../controllers/funding/addcompany.js'
import getCompanies from '../controllers/funding/companies.js';
import updateCompanies from '../controllers/funding/update.js';

const router = express.Router();

router.post('/addcompany',addCompany);

router.get('/', getCompanies);

router.put('/update', updateCompanies);

export default router;