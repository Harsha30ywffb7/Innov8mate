import express from 'express'

const router = express.Router()

router.post('/signup',(req, res)=>{
    res.send({msg:"user should send his login here"})
})

