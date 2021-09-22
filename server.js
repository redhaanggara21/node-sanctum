// Import express
import express from "express";

// Import cors
import cors from "cors";

// Import connection
import db from "./app/config/dbconfig.js";

// Import router
import router from "./app/routes/routes.js";
 
// Init express
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// use express json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

 
// Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
//welcome
app.get("/", (req, res) => {
  res.json({ message: "Welcome to sanctum application." });
});

// use router
app.use(router);
 
// listen on port
// app.listen(5000, () => console.log('Server running at http://localhost:5000'));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});