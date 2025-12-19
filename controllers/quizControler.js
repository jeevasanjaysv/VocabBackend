import quizzes from "../models/quizSchema.js";

export const addRes=async(req,res)=>{
        await quizzes.insertOne(req.body)
        res.send("added")
}
export const getQuiz=async(req,res)=>{
        let {u_id}=req.query
        
        
        let qs=await quizzes.find({u_id:u_id})
        res.send (qs)
        
}