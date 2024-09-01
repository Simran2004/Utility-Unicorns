const express = require("express");
//controller link
//middleware

const router = express.Router();

router.get("/", getServices);
router.get("/:id", getServiceById);
router.post("/", protect, admin, createService);
router.put("/:id", protect, admin, updateService);
router.delete("/:id", protect, admin, deleteService);

module.exports = router;
