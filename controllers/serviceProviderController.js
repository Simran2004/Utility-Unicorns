const ServiceProvider = require("../models/ServiceProvider");

// Create a new service provider
exports.createServiceProvider = async (req, res) => {
  try {
    const serviceProvider = new ServiceProvider(req.body);
    await serviceProvider.save();
    res.status(201).json(serviceProvider);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all service providers
exports.getAllServiceProviders = async (req, res) => {
  try {
    const serviceProviders = await ServiceProvider.find();
    res.status(200).json(serviceProviders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get service provider by ID
exports.getServiceProviderById = async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findById(req.params.id);
    if (!serviceProvider)
      return res.status(404).json({ error: "Service Provider not found" });
    res.status(200).json(serviceProvider);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update service provider
exports.updateServiceProvider = async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!serviceProvider)
      return res.status(404).json({ error: "Service Provider not found" });
    res.status(200).json(serviceProvider);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete service provider
exports.deleteServiceProvider = async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findByIdAndDelete(
      req.params.id
    );
    if (!serviceProvider)
      return res.status(404).json({ error: "Service Provider not found" });
    res.status(200).json({ message: "Service Provider deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
