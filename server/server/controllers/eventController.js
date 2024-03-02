// const User = require('../models/userModel');
const {Event} = require("../models/eventModel");
const {tikets} = require("../models/ticketModel");

// const slugify = (text) => text.toString().toLowerCase()
//   .replace(/\s+/g, '-')           // Replace spaces with -
//   .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
//   .replace(/\-\-+/g, '-')         // Replace multiple - with single -
//   .replace(/^-+/, '')             // Trim - from start of text
//   .replace(/-+$/, '');           // Trim - from end of text


const homepageForEvents = async(req, res, next)=>{
    try {
        const events = await Event.find({});
        res.json(events);
    } catch (error) {
        res.status(500)
        return next(new Error('Server error'));
    }
    next();
}

// CRUD events
const addNewEvent = async (req, res) =>{
    try {
        const {
          title, 
          time, 
          location, 
          price, 
          description, 
          category,
          tags,
          startDate,
          endDate,
          numberOfGuests,
          // ticketId, 
          reviews,
        } = req.body;

      //   if (ticketId && !mongoose.Types.ObjectId.isValid(ticketId)) {
      //     return res.status(400).send({ message: 'Invalid ticketId provided' });
      // }
      // console.log("Received numberOfGuests: ", numberOfGuests);
       
        // const slug = slugify(title); 
        // create the newEvent
        const newEvent =  new Event({
          title,
          time,
          location,
          price,
          description,
          category,
          tags,
          // slug,
          startDate,
          endDate,
          numberOfGuests,
          // ticketId, 
          reviews,
        });
        await newEvent.save();
        //save the new event
        res.status(201).json({ 
          _id: newEvent._id,
          title: newEvent.title,
          location: newEvent.location,
          time: newEvent.time,
          slug: newEvent.slug,
        }
          ,{ message: "Admin created event successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }


  //  const updateEvent = async(req, res, next)=>{
  //   try {
  //     const { _id } = req.params;
  //     const eventUpdate = req.body;

  //     const newEventUpdate = await Event.findByIdAndUpdate( _id, eventUpdate, {
  //         new: true,
  //       });
    
  //       if (!eventUpdate) {
  //         res.status(404).json({ error: "event not found" });
  //       }
      
  //       res
  //         .status(201)
  //         .json({ message: "event updated sucessfully!", Event: newEventUpdate });
  //     } catch (error) {
  //       console.error(error);
  //       res.status(500)
  //       return next(new Error('Server error'));
  //     }
  //   }

    // async function deleteEvent(req, res, next){
    //     try {
    //         const { _id } = req.params.id;
        
    //         const deleteEvent = await Event.findByIdAndRemove(_id);
                    
    //         if (!deleteEvent) {
    //             return res.status(400).json({ message: "The item is not found" });
    //         }
    //         res.status(200).json({ message: "event deleted sucessfully!" });
    //       } catch (error) {
    //         res.status(500)
    //         return next(new Error('Server error'));
    //       }
    //     }

        const getFilteredEventsByTagsCato = async (req, res, next) => {
          try {
              const { category, tags } = req.query;
              let query = {};
      
              // Filter by category 
              if (category && ['Sports', 'Theater', 'Concerts', 'Festivals', 'Conferences', 'Exhibitions'].includes(category)) {
                  query.category = category;
              }
      
              // Filter by tags 
              if (tags) {
                  const tagsArray = tags.split(',').filter(tag => ['HotDeal', 'Popular', 'RareFind', 'BudgetFriendly', 'UpComing'].includes(tag));
                  if (tagsArray.length) {
                      query.tags = { $in: tagsArray };
                  }
              }
      
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
      
// const getSingleEvent =async(req, res)=>{
//   try {
//     const { slug } = req.params;

//     if (!slug || slug.length === 0) {
//       return res.status(400).send({ message: 'Invalid event slug provided' });
//     }

//     const event = await Event.findById({ title: slug });

//     if (!event) {
//       return res.status(404).send({ message: 'Event not found' });
//     }

//     res.status(200).json(event);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };// does not work will by the title// i gonna work more on it 


    module.exports = {
        addNewEvent,
        // updateEvent,
        // deleteEvent,
        getFilteredEventsByTagsCato,
        // getSingleEvent,
        homepageForEvents,
      };