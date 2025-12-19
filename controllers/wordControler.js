import words from "../models/wordSchema.js";
export const addWrd=async(req,res)=>{
    await words.insertOne(req.body)
    res.send("added")
}

export const fet_w_By_id=async(req,res)=>{
    let {u_id}=req.query
    let w=await words.find({u_id:u_id})
    res.json(w)
}
export const delById=async(req,res)=>{
    let id=req.params.id
    await words.deleteOne({id:id})
    res.send("deleted")
}
export const UpdateWrd=async(req,res)=>{
    let id=req.params.id
    await words.updateOne({id:id},{$set:req.body})
    res.send("updated")

}