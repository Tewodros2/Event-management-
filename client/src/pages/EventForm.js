// components/EventForm.js

import React, { useState } from "react";
import axios from "axios";

const EventForm = ({ event, onEventSubmit }) => {
  const [formData, setFormData] = useState(event || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/events", formData);
    onEventSubmit(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-md-center">
        <div className="col-lg-3 col-sm-1"></div>
        <div className="col-auto requestForm">
          <div className="text-center">
            <h3 style={{ color: "white" }}>Event Request Form</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <select
              id="eventType"
              className="form-select mb-4"
              value={formData.eventType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                ---select type ---
              </option>
              <option value="Conference"> Conference</option>
              <option value="B2B"> B2B </option>
              <option value="Panel Discussion"> Panal Discussion </option>
              <option value="G2B"> G2B </option>
              <option value="G2C"> G2C </option>
              <option value="Chamber"> Chamber </option>
            </select>
            {/* Add form fields for name, eventType, email, etc. */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {/* ... other fields ... */}
            <input
              type="text"
              placeholder="Name"
              className="form-control mb-4"
              required
              autoFocus
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-4"
              required
              autoFocus
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="phone no"
              className="form-control mb-4"
              required
              autoFocus
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Location"
              className="form-control mb-4"
              required
              autoFocus
              value={formData.location}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Participant no"
              className="form-control mb-4"
              required
              autoFocus
              value={formData.particpantNo}
              onChange={handleChange}
            />
            <input
              type="date"
              placeholder="Start time"
              className="form-control mb-4"
              required
              autoFocus
              value={formData.startTime}
              onChange={handleChange}
            />
            <input
              type="date"
              placeholder="End time"
              className="form-control mb-4"
              required
              autoFocus
              value={formData.endTime}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-warning  btnEventSubmit">
              Submit Event Request
            </button>
          </form>
        </div>
        <div className="col-lg-3 col-sm-1"></div>
      </div>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default EventForm;
