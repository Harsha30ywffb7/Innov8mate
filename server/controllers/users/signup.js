import express from 'express'
import User from '../../models/user-schema.js'

const router = express.Router()

router.post('./signup',async(req,res)=>{
    try{
        const {email, password} = req.body;

        // Check if user with the provided email already exists
        const existingUser = await User.findOne({email})
        if(existingUser){
            res.status(400).send({error:"'User with this email already exists'"})
        }

        //create new user
        const newUser = new User({email, password});

        // Save the user to the database
        await newUser.save();
        res.status(201).json({ message: 'User signed up successfully', user: newUser });
    }
    catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    })

export default router;