
const {Event, Review} = require("../models/eventModel");

const searchforEvents = async(req,res)=>{
  const { title } = req.query;

    if (!title) {
        return res.status(400).json({ message: 'Title query parameter is required.' });
    }
    try {
      const events = await Event.find({ title: new RegExp(title, 'i') });

      if (events.length === 0) {
          return res.status(404).json({ message: 'No events found with that title.' });
      }

      res.status(200).json(events);
  } catch (error) {
      next(error);
  }
};

module.exports = {
    searchforEvents,
}