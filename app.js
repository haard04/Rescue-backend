import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/agency.js"
import fs from "fs"
import https from "https"
const app = express();
const port = 5000; 


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/',routes);
const CONNECTION_URL ='mongodb+srv://printpops02:9377618011@cluster0.zdz7sks.mongodb.net/resue';
const PORT = process.env.PORT ||3000;
const BASE_URL= 'https://localhost:3000/';
 mongoose.set("strictQuery", false); 
mongoose.connect(CONNECTION_URL , 
    { useNewUrlParser:true,useUnifiedTopology: true}
    )
    .then(()=> app.listen(PORT,()=> console.log(`Server Running on port:${PORT}`)))
    .catch((error)=>console.log(error.message));

    
app.listen(port,()=>console.log(`listening`));
app.get("/", async (req, res) => {
    try {
      // Use Mongoose to query the database and retrieve agencies
      const agencies = await Agency.find();
      res.status(200).json(agencies); // Send the retrieved data as JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app.use('/', routes); // Changed the base URL to '/'
