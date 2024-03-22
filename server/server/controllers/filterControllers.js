
const {Event, Review} = require("../models/eventModel");


const getFilteredEventsByTagsCato = async (req, res, next) => {
    try {
        const { category, tags } = req.query;
        let query = {};
        // Filter by category 
        if (category && [
          'Sports', 
          'Theater', 
          'Concerts', 
          'Festivals', 
          'Conferences', 
          'Exhibitions'
        ].includes(category)) {
            query.category = category;
        }
  
        // Filter by tags 
        if (tags) {
            const tagsArray = tags.split(',').filter(tag => [
                'HotDeal', 
                'Popular', 
                'RareFind', 
                'BudgetFriendly', 
                'UpComing'
            ].includes(tag));
            if (tagsArray.length) {
                query.tags = { $in: tagsArray };
        }}
        const events = await Event.find(query).sort({ createdAt: -1 }); // Sorting by creation date as an example
        if (events.length) {
            res.status(200).json(events);
        } else {
            res.status(404).json({ message: "No matching events found." });
        }
    } catch (error) {
        next(error);
    }
  };
        

  const getFilteredEventsByPrice = async (req, res) => {
    const { price } = req.query;
    let query = {};
  
    try {
      if (price) {
        switch (price) {
          case 'less than 40':
            query.price = { $lt:40 };
            break;
          case 'greater than 41':
            query.price = { $gt: 41 };
            break;
          default:
            return res.status(400).json({ message: 'Invalid price range' });
        }
      }
    const events = await Event.find(query).sort({ price: 1 }); 
    //price in ascending order
    res.status(200).json(events);
} catch (err) {
    res.status(500).json({ message: err.message });
}
};


const searchforEvents = async(req,res)=>{
  const { title } = req.query;

    // Check if the title parameter is provided
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
    getFilteredEventsByTagsCato,
    getFilteredEventsByPrice,
    searchforEvents,
}