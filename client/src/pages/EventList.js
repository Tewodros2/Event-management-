// components/EventList.js

import React from 'react';

const EventList = ({ events, onEdit, onDelete }) => {
    return (
        <ul>
            {events.map(event => (
                <li key={event._id}>
                    {event.name} - {event.eventType}
                    <button onClick={() => onEdit(event)}>Edit</button>
                    <button onClick={() => onDelete(event._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default EventList;
