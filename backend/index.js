import express from "express";
import { connectDatabase } from "./db.js";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/router.js";
import categoryRouter from "./routes/categoryRouter.js";
import labelRouter from "./routes/labelRouter.js";
import statusRouter from "./routes/statusRoutes.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/category", categoryRouter);
app.use("/label", labelRouter);
app.use("/status", statusRouter);
app.use("/", router);

connectDatabase();
app.listen(5000, () => {
  console.log("Server up and running");
});
