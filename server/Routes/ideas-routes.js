import express from 'express'
import supportIdea from '../controllers/ideas/supportpage.js';
import postIdea from '../controllers/ideas/postIdea.js'

const router = express.Router()

router.post('/supportIdea',supportIdea)

router.post('/postidea', postIdea);

export default router;
