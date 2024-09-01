const express = require("express");
//controller link
const router = express.Router();
//middleware link
router.get("/me", protect, getUserProfile);
router.put("/me", protect, updateUserProfile);

module.exports = router;
