import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from "body-parser";
import connection from "./config/connectDB";

const app = express();
configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test connect db
connection();

initWebRoutes(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("JWT is running");
});
