import express from 'express';
import signup from '../controllers/users/signup.js';
import signin from '../controllers/users/signin.js';
import registerUser from '../controllers/users/registration.js';
const router = express.Router();

router.post('/signup', signup);

router.post('/signin', signin);

router.post('/register', registerUser);



export default router;
