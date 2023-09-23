import express from "express";

import { getAgencies,createAgency,getAgenciesByCity } from "../controllers/agency.js";
const router=express.Router();

router.get('/',getAgencies); 
router.post('/',createAgency);
router.get('/bycity', getAgenciesByCity);
 

export default router;