import React, { useState } from "react";
import "./StreamList.css";
import { FaTrashAlt } from "react-icons/fa"; // Importing a Font Awesome icon

function StreamList() {
  const [input, setInput] = useState(""); // User input state
  const [events, setEvents] = useState([]); // List of submitted events

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setEvents([...events, input]); // Add new event to the list
      setInput(""); // Clear input field
    }
  };

  // Handle event deletion
  const handleDelete = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <div className="streamlist-container">
      <h1>StreamList Events</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter an event..."
          className="event-input"
        />
        <button type="submit" className="submit-btn">Add Event</button>
      </form>

      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index} className="event-item">
            {event}
            <FaTrashAlt
              className="delete-icon"
              onClick={() => handleDelete(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
