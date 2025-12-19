import users from "../models/userSchema.js";

export const add=async(req,res)=> {
    await users.insertOne(req.body)
    res.send("added")

}

export const getRuser=async(req,res)=>{
    const {email,pass}=req.query
    
    let u = await users.find({email: email,pass:pass})
    res.json(u)
}
export const getUserByEmail=async(req,res)=>{
    const {email} =req.query
    let u = await users.find({email:email})
    res.json(u)
}

export const editUser=async(req,res)=>{
    const {id}=req.params
    await users.updateOne({id:id},{$set:req.body})
    res.send("changed")


}

