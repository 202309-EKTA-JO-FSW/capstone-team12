const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminController");
const Validator = require("../validation/validator");

//CRUD admin
router.post("/admain",adminControllers.admainPage);
router.get("/admain/:id",adminControllers.admainSinglePage);
router.delete("/admain/:id",adminControllers.admainSinglePageDelete);
router.put("/admain/:id",adminControllers.admainSinglePageUpdate);

//delete && get  user ++++++++++++++++++++++++++
//CRUD tickets

//login logout 
router.get("/signup", (_, res) => { res.render("auth/admin/signup"); });
router.get("/signin", (_, res) => { res.render("auth/admin/signin"); });

//auth
router.post("/signup", Validator, adminControllers.signup);
router.post("/signin", adminControllers.signin);
router.get("/signout", adminControllers.signout);

//to manage events...
//to add events by admins
router.post("/admin/event/new", adminControllers.addNewEvent);
//to update events by admins
router.put("/admin/event/:id", adminControllers.updateEvent);
//to delete events by admins
router.delete("/admin/event/:id", adminControllers.deleteEvent);
//to search all events by admins
router.get("/events", adminControllers.getAllEvents);
router.get("/events/:id", adminControllers.getSingleEvent);

//recives  comments and review 
// router.get("/admin/events/comments/comment", adminControllers.getMessages);
// router.get("/admin/events/rate", adminControllers.getRateResults);
router.get("/admin/events/review", adminControllers.getReviewsResults);

//Dashbords and target audience
router.get("/admin/dashbord/events/:id/ticket/:id", adminControllers.ticketsLeft);
router.get("/admin/dashbord/events/tickets", adminControllers.allTicketsLeft);

router.get("/admin/dashbord/events", adminControllers.allEvents);
router.get("/admin/dashbord/events/:id", adminControllers.oneEvent);

module.exports = router;