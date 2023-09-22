import express from "express";

import { getAgencies,createAgency } from "../controllers/agency.js";
const router=express.Router();

router.get('/',getAgencies); 


export default router;