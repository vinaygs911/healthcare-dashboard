const express = require("express");
const Patient = require("../models/Patient");

const router = express.Router();

// Get all patients
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving patients", error });
  }
});

// Add a new patient
router.post("/", async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ message: "Error adding patient", error });
  }
});

module.exports = router;
