import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    {
        id:{
            type:Number,
            requied:true,
            unique:true
        }, 
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        pass: {
            type: String,
            required: true,
            minlength: 1
        }
    }
)
const users=mongoose.model("users",userSchema)
export default users