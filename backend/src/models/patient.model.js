const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  heartRate: { type: Number, required: true },
  bloodPressure: { type: String, required: true },
  temperature: { type: Number, required: true },
});

module.exports = mongoose.model("Patient", patientSchema);
