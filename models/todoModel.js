import{ model , Schema } from 'mongoose'

const todoSchema= new Schema({
    item: {
      type:String,
      required:true
     },
    status: {
        type:String,
        required:true
    }
    
})

export default model('todoModel',todoSchema) 