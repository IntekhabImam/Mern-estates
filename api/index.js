import express from "express";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// database connection 
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
