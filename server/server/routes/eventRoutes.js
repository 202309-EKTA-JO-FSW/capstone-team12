const express = require("express");
const router = express.Router();

// const adminMiddleware = require('../middleware/adminMiddleware');
// const authMiddleware = require('../middleware/authMiddleware');

const {
    addNewEvent,
    // updateEvent,
    getFilteredEventsByTagsCato,
    // getSingleEvent,
    // getSingleEventAdmin,
    // deleteEvent,
    homepageForEvents
}= require("../controllers/eventController");

// // to manage events...
router.post("/new", addNewEvent);// in progress
// router.patch("/updated/:id", updateEvent);
// router.delete("/deleted/:id", deleteEvent);
router.get("/filter",  getFilteredEventsByTagsCato);
// router.get("/:id", getSingleEvent);
// router.get("/events/:id",adminMiddleware,authMiddleware, getSingleEventAdmin); //based special for admain 
router.get("/", homepageForEvents);// done

// // managing the events page
// // home page
// router.get("/event", getEventsByCategory);

// // recives  comments and review
// // router.get("/admin/events/comments/comment", getMessages);
// // router.put("/admin/events/comments/comment", addComment);
// // router.delete("/admin/events/comments/delete/:id", getMessages);
// // router.get("/admin/events/review", getReviewsResults); 

// // Dashbords and target audience if there is timw
// // router.get("/admin/dashbord/events/:id/ticket/:id", ticketsLeft);
// // router.get("/admin/dashbord/events/tickets", allTicketsLeft);

// // router.get("/admin/dashbord/events", gitAdminAllEvents);
// // router.get("/admin/dashbord/events/:id", oneEvent);

module.exports = router;