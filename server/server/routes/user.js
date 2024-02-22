// const express = require("express");
// const router = express.Router();

// const userControllers = require("../controllers/user");
// const userControllers = require("../controllers/auth");
// const Validator = require("../validation/validator");//for password and email 
// const userRole = require("../middleware/userRole");

// //event (public API)
// router.get("/events", userControllers.getAllEvents);
// router.get("/events/:id", userControllers.getSingleEvent);
// router.get("/events/filter", userControllers.filterEvents);
// router.post("/events/search", userControllers.searchEvents);
// //singin & signup
// router.get("/signup", (_, res) => { res.render("auth/user/signup"); });
// router.get("/signin", (_, res) => { res.render("auth/user/signin"); });

// // authentication
// router.post("/signup", Validator, userControllers.signup);
// router.post("/signin", userControllers.signin);
// router.get("/signout", userControllers.signout);
// //Tickets(private API)
// router.get("/user/tickets", userRole("user"), userControllers.getAllUserTickets);
// router.delete("/user/tickets/:id", userRole("user"), userControllers.deleteTicket);
// router.post("/user/tickets/:id", userRole("user"), userControllers.addTicket);
// //user profile
// router.get("/user/profile/:id", userRole("user"), userControllers.getUserProfile);
// router.put("/user/profile/:id", userRole("user"), userControllers.updateUserProfile);
// //review
// router.get("/event/:id/reviews", userControllers.getEventReviews);
// router.post("/user/event/:id/reviews", userRole("user"), userControllers.addEventReview);
// router.delete("/user/reviews/:id", userRole("user"), userControllers.deleteReview);
// router.put("/user/reviews/:id", userRole("user"), userControllers.editReview);

// //cart 
// module.exports = router;