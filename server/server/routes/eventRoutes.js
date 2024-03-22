// const express = require("express");
// const router = express.Router();

// const authMiddleware = require('../middleware/authMiddleware');
// const adminMiddleware = require('../middleware/adminMiddleware');
// const eventController = require("../controllers/eventController");
// const reviews = require("../controllers/reviewController");
// const filtered = require("../controllers/filterControllers");

// // // to manage events...
// router.route("/")
//     .get(eventController.homepageForEvents)// done
//     .get(filtered.getFilteredEventsByTagsCato) //done
//     .get(filtered.getFilteredEventsByPrice)//done
//     .post(filtered.searchforEvents);// done
// // .get(eventController.getFilteredEventsByLocation)// in progress
// // .get(eventController.getFilteredEventsByTime); // in progress

// router.route("/:id")
//     .get(eventController.getSingleEventInfo);//done

// // // managing the events by dashboard page
// router.route("/dashboard/admin")
//     .post(eventController.addNewEvent);//done
// // .post( authMiddleware, adminMiddleware, eventController.seeAllAdminEvents)//in progress

// router.route("/dashboard/admin/event/:id", adminMiddleware)
//     .put(eventController.updateEvent)// cannot work
//     .delete(eventController.deleteEvent)// done
//     .get(authMiddleware, adminMiddleware, eventController.getAdminEventInfo) //done
// //.get(eventController.ticketsLeft);//// tickets should add on schema 

// router.route("/review/:d")
//     .get(reviews.getReview);//done

// router.route("/create/reviews/:d")
//     .put(authMiddleware, reviews.addReview)//done
//     .delete(authMiddleware, reviews.deleteReview);//done

// module.exports = router;

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

router.route("/search") 
    .get(filtered.searchforEvents);// done

router.route("/:id")
    .get(eventController.getSingleEventInfo);//done

// // managing the events by dashboard page
router.route("/dashboard/admin")
    .post(authMiddleware, adminMiddleware, eventController.addNewEvent);//done
// .post( authMiddleware, adminMiddleware, eventController.seeAllAdminEvents)//in progress

router.route("/dashboard/admin/event/:id")
    .patch(authMiddleware, adminMiddleware, eventController.updateEvent)// cannot work
    .delete(authMiddleware, adminMiddleware, eventController.deleteEvent)// done
    .get(authMiddleware, adminMiddleware, eventController.getAdminEventInfo) //done
//.get(eventController.ticketsLeft);//// tickets should add on schema 

router.route("/review/:d")
    .get(reviews.getReview);//done

router.route("/create/reviews/:d")
    .put(authMiddleware, reviews.addReview)//done
    .delete(authMiddleware, reviews.deleteReview);//done

module.exports = router;