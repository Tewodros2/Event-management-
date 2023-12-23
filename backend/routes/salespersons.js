import express from "express";
const router = express.Router()

import {
    registerSP,
    preRegister,
} from "../controllers/salespersonController.js";




router.post("/preRegister",preRegister);



export default router;