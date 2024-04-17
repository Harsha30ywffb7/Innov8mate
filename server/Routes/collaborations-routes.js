import express from 'express'

import projects from '../controllers/collaboration/projects.js'

import addProject from '../controllers/collaboration/addProject.js';
const router = express.Router()

router.get('/',projects);

router.post('/addProject',addProject);

export default router