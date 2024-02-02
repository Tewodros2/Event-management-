// models/Meeting.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: String,
  // date: Date,
  email: String,
  phoneNumber: String,
  location: String,
  // periodOfEvent: String,
  particpantNo: Number,
  startTime: String,
  endTime: String,
  eventType: String,
});

const Event = mongoose.model("Meeting", eventSchema);

export default Event;
