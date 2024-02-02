import express from "express";


import { addEvent,getEventList, editEvent, deleteEvent } from '../controllers/eventController.js';


const router = express.Router();

router.post("", addEvent);
router.get("", getEventList);
router.put('/events/:id', editEvent);
router.put('/events/:id', editEvent);
router.delete('/events/:id', deleteEvent);

export default router;






// router.get("/",getParties);

// router.get("/:id",getParty);

// router.post("/", addEvent);

// router.delete("/:id",deleteParty);

// router.put("/:id",updateParty);