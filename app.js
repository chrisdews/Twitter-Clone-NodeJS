import express from "express";
import db from "./db/db";
// Set up the express app
import bodyParser from "body-parser";
// bodyParser - parses JSON data to make available with req.body.xxx
const app = express();
import router from './routes/index.js';


// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);


const PORT = 5000;



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
