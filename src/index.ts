import express from "express";
import router from "./routes";

const app = express();

app.use("/api", router);

app.listen(3000, () => {
  console.log("Im the best servers of all the servers!");
});
