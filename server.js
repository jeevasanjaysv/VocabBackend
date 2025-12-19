import express from'express'
import cors from 'cors'
import mongoose from 'mongoose'
import urouter from './routes/userRoutes.js'
import Wrouter from './routes/wordRoutes.js'
import Qrouter from './routes/quizRoutes.js'

let app=express()
app.use(express.json())
app.use(cors())


mongoose
  .connect("mongodb+srv://jeevasanjay:jeeva123@cluster0.xobvtqe.mongodb.net/Vocabulary")
  .then(() => {
    console.log("✅ MongoDB Atlas Connected");

  
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
 
  
 

app.use('/users',urouter)
app.use('/words',Wrouter)
app.use('/quizzes',Qrouter)



app.listen(4000, () => {
  console.log("🚀 Server running on port 4000");
});


