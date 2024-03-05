// const mongoose = require('mongoose');
// const User = require('../models/userModel');
const {Event, Review} = require("../models/eventModel");
// const {tikets} = require("../models/ticketModel");

const getReview = async (req, res) => {
    try {
        const eventId = req.params.id; 
        // Find the event by its ID
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event.reviews);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
  
//add new review
const addReview = async (req, res) => {
try {
    const eventId = req.params.eventId; 
    const { rating, comment } = req.body;  

    if (!rating) {
    return res.status(400).json({ message: 'Rating is required' });
    }
    const newReview = { rating, comment };

    // Find the event and add the new review to its reviews array
    const event = await Event.findByIdAndUpdate(
    eventId,
    { $push: { reviews: newReview } },  // Push the new review into the reviews array
    { new: true, safe: true, upsert: true }  // Options for findByIdAndUpdate
    );

    if (!event) {
    return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Review added successfully', event });
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
}
};

  
  const deleteReview = async (req, res) => {
    try {
      const { eventId, reviewId } = req.params; // Assuming you pass both IDs in the URL
  
      // Find the event and remove the review ID from its reviews array
      const event = await Event.findByIdAndUpdate(eventId, { $pull: { reviews: reviewId } }, { new: true });
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      // Delete the review from the Review collection
      const review = await Review.findByIdAndRemove(reviewId);
      if (!review) {
        return res.status(404).json({ message: 'Review not found' });
      }
  
      res.status(200).json({ message: 'Review deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
    module.exports = {
        getReview,
        addReview,
        deleteReview,
    }