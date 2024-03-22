// const mongoose = require('mongoose');
// const User = require('../models/userModel');
const { Event } = require("../models/eventModel");
// const {tikets} = require("../models/ticketModel");

//home page
const homepageForEvents = async (req, res, next) => {
  try {
    const events = await Event.find({}).sort({ createdAt: -1 });
    res.status(200).json(events);
    console.log(events)
  }
  catch (error) {
    res.status(500)
    return next(new Error('Server error'));
  }
}

// CRUD events
const addNewEvent = async (req, res) => {
  try {
    const requiredFields = [
      'title',
      'time',
      'location',
      'price',
      'category',
      'startDate',
      'endDate',
      'numberOfGuests',
      'tickets',


    ];

    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
      return res.status(400)
        .json({ 'message': `The following fields are required: ${missingFields.join(', ')}` });
    }
    const result = await Event.create({
      title: req.body.title,
      time: req.body.time,
      location: req.body.location,
      price: req.body.price,
      category: req.body.category,
      numberOfGuests: req.body.numberOfGuests,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      reviews: [],
      tags: req.body.tags,
      description: req.body.description,
      tickets: []
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ 'message': 'Server error occurred while creating the event.' });
  }
}


//  const deleteEvent =async(req, res) => {
//       // if (!req?.body?.id) return res.status(400).json({ 'message': 'Event ID required.' });

//       const event = await Event.findOne({ _id: req.body.id }).exec();
//       if (!event) {
//           return res.status(204).json({ "message": `No Events matches ID ${req.body.id}.` });
//       }
//       const result = await event.deleteOne(); //{ _id: req.body.id }
//       res.json(result);
//     }

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(404).json({ error: error.message });
    }
    res.status(200).json(deletedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleEventInfo = async (req, res) => {
  if (!req?.params?.id) return res.status(400).json({ "message": 'event ID required' });
  const event = await Event.findOne({ _id: req.params.id }).exec();
  if (!event) {
    return res.status(204).json({ 'message': `event ID ${req.params.id} not found` });
  }
  res.json(event);
}
const getAdminEventInfo = async (req, res) => {
  if (!req?.params?.id) return res.status(400).json({ "message": 'event ID required' });
  const event = await Event.findOne({ _id: req.params.id }).exec();
  if (!event) {
    return res.status(204).json({ 'message': `event ID ${req.params.id} not found` });
  }
  res.json(event);
}

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const newEventBody = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(id, newEventBody, {
      new: true,
    });

    if (!updatedEvent) {
      res.status(404).json({ error: "Event not found" });
    }

    res
      .status(201)
      .json({ message: "Event updated sucessfully!", event: updatedEvent });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
//   if (!req?.body?.id) {
//     return res.status(400).json({ 'message': 'ID parameter is required.' });
// }
//   const event = await Event.findOne({ _id: req.body.id }).exec();
//   if (!event) {
//       return res.status(204).json({ "message": `No event matches ID ${req.body.id}.` });
//   }
//   // if (req.body?.description) event.description = req.body.description;
//   if (req.body?.price) event.price = req.body.price;
//   const result = await event.save();
//   res.json(result);
//   }

module.exports = {
  addNewEvent,
  updateEvent,
  deleteEvent,
  getSingleEventInfo,
  homepageForEvents,
  getAdminEventInfo,
};





















