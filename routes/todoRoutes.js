import express from 'express'

import todoModel from '../models/todoModel.js'
const router = express.Router()

router.get('/todos',async (req,  res)=>{
    let todos= await todoModel.find()
    res.send(todos)
})
router.post('/todos', async (req,res)=> {
    let todo=new todoModel({
        item:req.body.item,
        status:req.body.status
        
    })
    let newTodo= await todo.save()
    res.send({
        'message':'created todo',
        'data':newTodo
    })

})


router.get('/todos/get/:id', async (req,res)=>{
    let id=req.params.id
    let todo=await todoModel.find({_id: id})
    res.send({
        message:'Found todo by id',
        data:todo
    })
})
router.post('/todos/complete/:id', async (req, res)=>{
    let id = req.params.id
    let todo = await todoModel.findOne({_id:id})
    todo.status='complete'
    let updatedTodo = await todo.save()
    res.send({
        message:'Todo completed',
        data: updatedTodo
    })
})
export default router 