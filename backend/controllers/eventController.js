// controllers/meetingController.js
import Event from "../models/events.js";

const addEvent = async (req, res) => {
  try {
    const {
      name,
      eventType,
      email,
      phoneNumber,
      location,
      particpantNo,
      startTime,
      endTime,
    } = req.body;

    const newEvent = new Event({
      name,
      email,
      location,
      phoneNumber,
      particpantNo,
      startTime,
      endTime,
      eventType,
    });

    await newEvent.save();

    res.json({ success: true, message: "Event reserved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
// export default addEvent;
// controllers/events.js

const getEventList = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).send({ message: error.message || "Some error occurred while retrieving events." });
  }
};

const editEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.json({ success: true, message: "Event updated successfully", event: updatedEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// controllers/events.js

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { addEvent,getEventList, editEvent, deleteEvent };