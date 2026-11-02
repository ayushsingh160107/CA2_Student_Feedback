const express=require('express');
const app=express();
app.use(express.json());
const feedbackRoutes=require('./Routes/feedbackRoutes.js');
app.use('/api/feedback',feedbackRoutes);
const mongoose=require('mongoose');


app.listen(3000, () => console.log('Server running on http://localhost:3000'));

const express = require("express");
const mongoose = require("mongoose");
const feedbackRoutes = require("./feedbackRoutes");



// Start server after DB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/feedbackdb")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => console.log("Server running on http://localhost:3000"));
  })
  .catch((err) => console.error("DB connection error:", err));