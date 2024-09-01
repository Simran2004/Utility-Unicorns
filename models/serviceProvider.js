const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  services: {
    type: [String],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: { type: Number, default: 0 },
  phone: { type: String, required: true },
});

const Provider = mongoose.model("Provider", providerSchema);
module.exports = Provider;
