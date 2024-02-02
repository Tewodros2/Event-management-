import React, { useState } from "react";
import "./page.css";
import axios from "axios";
import { API } from "../helpers/config";
import toast from "react-hot-toast";

function RequestEvent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [particpantNo, setParticpantNo] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(Date.now());
  const [eventType, setEventType] = useState("select type");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(
        name,
        email,
        particpantNo,
        phoneNumber,
        startTime,
        endTime,
        eventType
      );
      console.log(name, "luwam");
      const { data } = await axios.post(`/events`, {
        name,
        email,
        particpantNo,
        phoneNumber,
        startTime,
        endTime,
        eventType,
      });
      console.log(data, "luwam");
    } catch (e) {
      toast.error(e);
    }
  };
  const changeEventType = async (e) => {
    e.preventDefault();
    console.log(e, "tedy");
    setEventType(e.target.value);
  };

  return (
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
            onChange={changeEventType}
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
          <input
            type="text"
            placeholder="Name"
            className="form-control mb-4"
            required
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-4"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="phone no"
            className="form-control mb-4"
            required
            autoFocus
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="form-control mb-4"
            required
            autoFocus
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="number"
            placeholder="Participant no"
            className="form-control mb-4"
            required
            autoFocus
            value={particpantNo}
            onChange={(e) => setParticpantNo(e.target.value)}
          />
          <input
            type="date"
            placeholder="Start time"
            className="form-control mb-4"
            required
            autoFocus
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <input
            type="date"
            placeholder="End time"
            className="form-control mb-4"
            required
            autoFocus
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <button type="submit" className="btn btn-warning  btnEventSubmit">
            Submit Event Request
          </button>
        </form>
      </div>
      <div className="col-lg-3 col-sm-1"></div>
    </div>
  );
}

export default RequestEvent;
