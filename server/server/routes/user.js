// const express = require('express')
// const router = express.Router()
// // const Validator = require("../middleware/validator");//for password and email 
// // const userRole = require("../middleware/userRole");//admin or normal user

// const {
//     getAllEvents,
//     getSingleEvent,
//     //filterEvents,
//     //searchEvents,
//     //singin ,
//     //signup,
//     getAllTickets,
//     getSingleTicket,
//     deleteSingleTicket,
//     addTicket,
//     createUserProfile,
//     getUserProfile,
//     updateUserProfile,
//     //getEventReviews,
//     //addEventReview,
//     //createReview,
//     //deleteReview,
//     //updateReview,


//} = require('../controllers/user')

// ///Event
//router.get('/events', getAllEvents)
// router.get('/events/:id', getSingleEvent)
// // router.get("/events/filter", filterEvents);
// // router.post("/events/search", searchEvents);

// /// singin & signup
// // router.get("/signup", (_, res) => { res.render("auth/user/signup"); });
// // router.get("/signin", (_, res) => { res.render("auth/user/signin"); });

// /// authentication
// // router.post("/signup", Validator, signup);
// // router.post("/signin", signin);
// // router.get("/signout", signout);

// // user tickets
// router.get("/tickets", userRole("user"), getAllTickets);
// router.get("/tickets/:id", userRole("user"), getSingleTicket);
// router.delete("/tickets/:id", userRole("user"), deleteSingleTicket);
// router.patch("/tickets/:id", userRole("user"), addTicket);

// // user profile
// router.post("/profile/:id", userRole("user"), createUserProfile);
// router.get("/profile/:id", userRole("user"), getUserProfile);
// router.patch("/profile/:id", userRole("user"), updateUserProfile);

// // user review 
// // router.get("/event/:id/reviews", getEventReviews);
// // router.post("/event/:id/reviews", userRole("user"), addEventReview);
// // router.delete("/event/:id/reviews/:id", userRole("user"), deleteReview);
// // router.patch("/event/:id/reviews/:id", userRole("user"), updateReview);


//module.exports = router
//
