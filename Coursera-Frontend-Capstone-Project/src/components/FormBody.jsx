import { useState } from "react";

export default function FormBody() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const handleSubmit = (e) => {
    alert(
      `Booking Confirmed !! \n Name: ${name} \n Date: ${date} \n Time: ${time} \n Guests Count: ${guests}`
    );
  };
  return (
    <form className="p-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className="form-text"></div>
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          required
        />
        <div className="form-text"></div>
      </div>
      <div className="mb-3">
        <label className="form-label">Time</label>
        <input
          type="time"
          className="form-control"
          min="17:00:00"
          max="22:00:00"
          onChange={(e) => {
            setTime(e.target.value);
          }}
          required
        />
        <div className="form-text"></div>
      </div>
      <div className="mb-3">
        <label className="form-label">Number of Guests</label>
        <input
          type="number"
          className="form-control"
          onChange={(e) => {
            setGuests(e.target.value);
          }}
          required
        />
        <div className="form-text"></div>
      </div>
      <div className="mb-3">
        <label className="form-label">Occasion (Birthday, Anniversary)</label>
        <input className="form-control" />
        <div className="form-text"></div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit Reservation
      </button>
    </form>
  );
}
