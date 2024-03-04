import { model,Schema } from "mongoose"


const userSchema = new Schema({
    name:{
          type:String,
          required:true
    },
    email:{
          type:String,
          required:true
    },
    phoneNumber:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:true
    }
})

export default model("userModel",userSchema)