import express from 'express'

const router= express.Router()
router.get('/test',(req, res)=>{
    let names=['Jane','doe','sally', 'danny']
    res.send(names)

}) 

router.get('/practice',(req, res)=>{
    res.send('this is apractice request')
})

router.get('/greetings',(req, res)=>{
    res.send('Hello Jane doe')
})
router.get('/students',(req, res)=>{
    let items=[{name:'jane',grade:6,age:12},
              {name:'Danny',grade:7,age:13},
              {name:'Sally',grade:4,age:8}]

        res.send(items)
})
export default router