import express from "express";
import router from "./routes";
import * as swaggerUi from "swagger-ui-express";
import { SwaggerService } from "./lib/services/swagger-service";
//import * as swaggerDocument from "./swagger.json";

const PORT = 3000;
const app = express();

app.use("/api", router);

//app.use("/api/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log("Listening to PORT: " + PORT);
});
