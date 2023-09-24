import Agency from "../models/agency.js";
import mongoose from "mongoose";

export  const getAgencies=async (req,res)=>{
  try {
    // Use Mongoose to query the database and retrieve agencies
    const agencies = await Agency.find();

    // Send the retrieved agencies as a JSON response
    res.status(200).json(agencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
  
}

export const createAgency= async (req,res)=>{
   
    try {
        // Extract agency data from the request body
        const {
          name,
          password,
          address,
          categories,
          resources,
          latitude,
          longitude,
          city,
          contactNumber,
          state,
          
          
          uid,
          verified,
      
          availability,
        } = req.body;
    
        // Create a new agency document
        const newAgency = new Agency({
          name,
          password,
          address,
          categories,
          resources,
          latitude,
          longitude,
          city,
          contactNumber,
          state,
       
          uid,
          verified,
          availability,
        });
    
        // Save the agency document to the database
        await newAgency.save();
    
        res.status(201).json({ message: 'Agency created successfully', agency: newAgency });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }


   
}

/* export const getAgenciesByCity = async (req, res) => {
  try {
    // Retrieve the 'city' query parameter from the request
    const { city } = req.query;

    // Use Mongoose to query the database and retrieve agencies by city
    const agencies = await Agency.find({ city }, { availability: 1 });

    // Send the retrieved agencies as a JSON response
    res.status(200).json(agencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}; */
export const getAgenciesByCity = async (req, res) => {
  try {
    // Retrieve the 'city' query parameter from the request
    const { city } = req.query;

    // Use Mongoose to query the database and retrieve agencies by city
    const agencies = await Agency.find({ city });

    // Send the retrieved agencies as a JSON response
    res.status(200).json(agencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
