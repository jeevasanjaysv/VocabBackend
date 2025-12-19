import dotenv from "dotenv";
dotenv.config();
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
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected");

    app.listen(process.env.PORT || 4000, () => {
      console.log("🚀 Server running on port 4000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
 

app.use('/users',urouter)
app.use('/words',Wrouter)
app.use('/quizzes',Qrouter)


