import express from "express";
import router from "./routes";

const PORT = 3000;
const app = express();

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Listening to PORT: " + PORT);
});
