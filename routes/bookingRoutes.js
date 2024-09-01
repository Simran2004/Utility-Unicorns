const express = require("express");
//controller link
//middleware

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/mybookings", protect, getUserBookings);
router.put("/:id", protect, admin, updateBookingStatus);

module.exports = router;
