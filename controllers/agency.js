
import Agency from "../models/agency.js";
import mongoose from "mongoose";

export  const getAgencies=async (req,res)=>{
   
    console.log("get request")
}

export const createAgency= async (req,res)=>{
   
    try {
        // Extract agency data from the request body
        const {
          name,
          password,
          identification_number,
          address,
          categories,
          resources,
          latitude,
          longitude,
          city,
          contactNumber,
          state,
          id,
          uid,
          verified,
          availibility,
        } = req.body;
    
        // Create a new agency document
        const newAgency = new Agency({
          name,
          password,
          identification_number,
          address,
          categories,
          resources,
          latitude,
          longitude,
          city,
          contactNumber,
          state,
          id,
          uid,
          verified,
          availibility,
        });
    
        // Save the agency document to the database
        await newAgency.save();
    
        res.status(201).json({ message: 'Agency created successfully', agency: newAgency });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }


   
}