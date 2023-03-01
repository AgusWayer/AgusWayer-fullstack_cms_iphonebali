import express from "express";
import { connectDatabase } from "./db.js";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/router.js";
import session from "express-session";
import productRoutes from "./routes/productroute.js";
import * as dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
    },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.use("/products", productRoutes);

connectDatabase();
app.listen(5000, () => {
  console.log("Server up and running");
});
