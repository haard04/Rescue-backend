
import Agency from "../models/agency.js";
import mongoose from "mongoose";

export  const getAgencies=async (req,res)=>{
    // try{
    //     const postMessages =await PostMessage.find();
    //     res.status(200).json(postMessages)
    //     return;
    // }
    // catch(error){
    //     res.status(404).json({message:error.message})
    //     return;
    // }
    console.log("get request")
}

export const createAgency= async (req,res)=>{
    // const post=req.body;

    // const newPost=new PostMessage(post);

    // try {
    //     await newPost.save();
    //     res.status(201).json(newPost);
    //     return;
    // } catch (error) {
    //     res.status(409).json({message:error.message})
    //     return;
    // }
    console.log('create')
}