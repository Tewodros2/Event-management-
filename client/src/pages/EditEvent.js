// EditEvent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventForm from './EventForm';
import EventList from "./EventList"

const EditEvent = () => {
    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await axios.get('/');
            setEvents(response.data);
        };
        fetchEvents();
    }, []);

    const handleEventSubmit = (event) => {
        setEvents([...events, event]);
        setEditingEvent(null);
    };

    const handleEdit = (event) => {
        setEditingEvent(event);
    };

    const handleDelete = async (id) => {
        await axios.delete(`/events/${id}`);
        setEvents(events.filter(event => event._id !== id));
    };

    return (
        <div>
            <EventForm event={editingEvent} onEventSubmit={handleEventSubmit} />
            <EventList events={events} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default EditEvent;
