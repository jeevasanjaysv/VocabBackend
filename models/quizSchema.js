import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
    {
      id: {
        type: Number,
        required: true,
        unique: true
      },
      u_id: {
        type: Number,
        required: true
      },
      Score: {
        type: Number,
        required: true
      },
      totalQuestions: {
        type: Number,
        required: true
      },
      date: {
        type: String,
        required: true
      }
    }
  );

 const quizzes= mongoose.model("quizzes",quizSchema)
 export default quizzes