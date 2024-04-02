import express from 'express'
import supportIdea from '../controllers/ideas/supportpage.js';
import postIdea from '../controllers/ideas/postIdea.js'
import getAllIdeas from '../controllers/ideas/getAllIdeas.js';

const router = express.Router()

router.post('/supportIdea',supportIdea)

router.post('/postidea', postIdea);

router.get('/allIdeas',getAllIdeas)

export default router;
