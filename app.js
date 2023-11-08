const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();


app.use(cors());
app.use(express.json());

// MongoDB Connection
const dbURI = "Mmongodb://localhost:27017"; 
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error: " + err);
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

