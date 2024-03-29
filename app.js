import express from "express";
import connectDB from "./db/connectdb.js";
import { join } from 'path';
import web from "./routes/web.js";
const app = express()

// const port = process.env.PORT || '3003'
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
const DATABASE_URL = "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({ extended: false }))

// Static Files
app.use("/student", express.static(join(process.cwd(), "public")))
app.use("/student/edit", express.static(join(process.cwd(), "public")))

// Set Template Engine

app.set("view engine", "ejs");

// Load Routes
app.use("/student", web)

app.get("edit", (req, res) => {
    res.render("edit");
  });
app.listen(3000, () => {
    console.log(`Server is listening at port 3000...`)
})

export default connectDB;