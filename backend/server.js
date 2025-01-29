// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Patient Schema
const patientSchema = new mongoose.Schema({
  name: String,
  heartRate: Number,
  bloodPressure: String,
  temperature: Number,
});
const Patient = mongoose.model("Patient", patientSchema);

// API Routes
app.get("/patients", async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

// Simulating Real-Time Data Updates
setInterval(async () => {
  const randomUpdate = {
    heartRate: Math.floor(Math.random() * (120 - 60) + 60),
    bloodPressure: `${Math.floor(Math.random() * (140 - 90) + 90)}/${Math.floor(Math.random() * (90 - 60) + 60)}`,
    temperature: (Math.random() * (39 - 36) + 36).toFixed(1),
  };
  await Patient.updateOne({}, { $set: randomUpdate });
  io.emit("patientData", randomUpdate);
}, 5000);

// Start Server
server.listen(5000, () => console.log("Server running on port 5000"));
