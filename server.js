import express from'express'
import cors from 'cors'
import mongoose from 'mongoose'
import urouter from './routes/userRoutes.js'
import Wrouter from './routes/wordRoutes.js'
import Qrouter from './routes/quizRoutes.js'


let app=express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/Vocabulary').then(console.log("connect"))
app.use('/users',urouter)
app.use('/words',Wrouter)
app.use('/quizzes',Qrouter)



app.listen(4000,()=>{console.log("server  running on 4000")})