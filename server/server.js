import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import UserRouter from './Routes/user-routes.js'


const app= express()

app.use(express.json())
app.use(cors())

// app.use(function (req, res, next) {
//    // Website you wish to allow to connect 
//    res.setHeader('Access-Control-Allow-Origin', '*'); 
//    // Request methods you wish to allow 
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
//    // Request headers you wish to allow 
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,access-token,session_token,user-type,user_type'); 
//    // Set to true if you need the website to include cookies in the requests sent // t
// }
// )




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