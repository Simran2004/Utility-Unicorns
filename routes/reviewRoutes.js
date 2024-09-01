const express = require("express");
//controller link
//middleware

const router = express.Router();

router.post("/", protect, createReview);
router.get("/:serviceId", getReviews);
router.delete("/:id", protect, admin, deleteReview);

module.exports = router;
