import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { DATABASE } from "./config.js";

import eventRoutes  from "./routes/eventsRoute.js";

const app = express();

// dbg
mongoose.set("strictQuery", false);
mongoose
  .connect(DATABASE)
  .then(() => console.log("db_connected"))
  .catch((err) => console.log(err));

// middlewares
app.use(express.json());
app.use(cors());
app.use("/events", eventRoutes);
// routes middleware

app.listen(3001, () => console.log("server_running_on_port_8000....."));
