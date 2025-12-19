import mongoose from "mongoose"

const wordSchema = new mongoose.Schema(
    {
      id: {
        type: Number,
        required: true,
        unique: true
      },
      word: {
        type: String,
        required: true,
        trim: true
      },
      Meaning: {
        type: String,
        required: true
      },
      Example: {
        type: String,
        required: true
      },
      u_id: {
        type: Number,
        required: true
      }
})

const words=mongoose.model("words",wordSchema)

export default words