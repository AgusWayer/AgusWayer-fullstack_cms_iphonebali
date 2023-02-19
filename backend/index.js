import express from "express";
import { connectDatabase } from "./db.js";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/router.js";
import categoryRouter from "./routes/categoryRouter.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.use("/category", categoryRouter);

connectDatabase();
app.listen(5000, () => {
  console.log("Server up and running");
});
