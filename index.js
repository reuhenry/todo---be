import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import practiceRoutes from './routes/practiceRoutes.js'
import practiceRoutes2 from './routes/practiceRoutes2.js'
import exampleRoutes from './routes/exampleRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
 const app = express()
 const PORT = 5000

 app.use(cors())
 app.use(bodyParser.json())
 

// 7BbszSy3dVJ9sPub

 app.use('/',practiceRoutes)
 app.use('/',todoRoutes)
 const mongoURI='mongodb+srv://reuhenry:7BbszSy3dVJ9sPub@cluster0.gqqw8bq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
   mongoose.connect(mongoURI)
     .then(()=> console.log('connected to mongo db'))
    .catch((err)=>console.log(err))


 app.listen(PORT,()=>{
     console.log('server listening on port:'  + PORT)
 })

 // 7BbszSy3dVJ9sPub
