import express from 'express'

const router=express.Router()
router.get('/test2',(req, res)=>{
    res.send('This is my send request')
})

export default router