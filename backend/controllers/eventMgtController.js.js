import Event from "../models/Event"; // Adjust the path as necessary

const getParties = async (req, res) => {
  try {
    const allParties = await Event.find({});
    res.json(allParties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
const getEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).send("Event not found");
    }
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};


const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.json(newEvent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).send("Event not found");
    }
    res.json({ message: "Event was deleted successfully!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}
const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
    if (!event) {
      return res.status(404).send("Event not found");
    }
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// const updateEvent = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, sale_start_date, sale_end_date, party_date, banner_url } =
//       req.body;
//     const updateEvent = await pool.query(
//       "UPDATE parties SET name=$1, sale_start_date=$2, sale_end_date=$3, party_date=$4, banner_url=$5 WHERE party_id=$6",
//       [name, sale_start_date, sale_end_date, party_date, banner_url, id]
//     );
//     res.json("Event was updated successfully");
//   } catch (err) {
//     console.error(err.message);
//   }
// };

module.exports = {
  getParties,
  getEvent,
  createEvent,
  deleteEvent,
  updateEvent,
};
