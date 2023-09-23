import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/agency.js"

const app = express();
const port = 3000; 


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/',routes);
const CONNECTION_URL ='mongodb+srv://printpops02:9377618011@cluster0.zdz7sks.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT ||12000;
//const BASE_URL= process.env.BASE_URL
mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_URL , 
    { useNewUrlParser:true,useUnifiedTopology: true}
    )
    .then(()=> app.listen(PORT,()=> console.log(`Server Running on port:${PORT}`)))
    .catch((error)=>console.log(error.message));