import express from  'express'

const router=express.Router()
router.get('/exercise',(req, res)=>{
    res.send('This is my example')
})

export default router