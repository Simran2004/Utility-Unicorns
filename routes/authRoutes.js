const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const {
  createServiceProvider,
  getAllServiceProviders,
  getServiceProviderById,
  updateServiceProvider,
  deleteServiceProvider,
} = require("../controllers/serviceProviderController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login",loginUser);
router.post("/service-providers",createServiceProvider);
router.get("/service-providers",getAllServiceProviders);
router.get("/service-providers/:id",getServiceProviderById);
router.put("/service-providers/:id",updateServiceProvider);
router.delete("/service-providers/:id",deleteServiceProvider);

module.exports = router;
