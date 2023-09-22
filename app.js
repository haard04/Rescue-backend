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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
