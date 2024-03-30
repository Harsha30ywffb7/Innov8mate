import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import UserRouter from './Routes/user-routes.js'



const app= express()

app.use(express.json())
app.use(cors())

const PORT = 5000;

app.use('/user',UserRouter)
// for normal check
app.get('/',(req, res)=>{
    res.send({msg:"This not home"})
})
app.listen(PORT, () => {
   
    console.log(`Server is running on port http://localhost:${PORT}`);
});

// mongodb co
mongoose.connect('mongodb://localhost:27017/Innov8mate')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });