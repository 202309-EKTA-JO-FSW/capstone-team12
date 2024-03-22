const express = require("express");
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const eventController = require("../controllers/eventController");
const reviews = require("../controllers/reviewController");
const filtered = require("../controllers/filterControllers");

// // to manage events...
router.route("/")
    .get(eventController.homepageForEvents)// done

router.route("/:id")
    .get(eventController.getSingleEventInfo);//done

// // managing the events by dashboard page
router.route("/dashboard/admin")
    .post(authMiddleware, adminMiddleware, eventController.addNewEvent);//done

router.route("/dashboard/admin/event/:id")
    .post(authMiddleware, adminMiddleware, eventController.updateEvent)
    .delete(authMiddleware, adminMiddleware, eventController.deleteEvent)
    .get(authMiddleware, adminMiddleware, eventController.getAdminEventInfo) 

router.route("/review/:d")
    .get(reviews.getReview);

router.route("/create/reviews/:d")
    .put(authMiddleware, reviews.addReview)
    .delete(authMiddleware, reviews.deleteReview);

module.exports = router;