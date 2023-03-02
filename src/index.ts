import express from "express";
import router from "./routes";
import * as swaggerUi from "swagger-ui-express";
import { SwaggerService } from "./lib/services/swagger-service";
//import * as swaggerDocument from "./swagger.json";

const PORT = 3000;
const app = express();

app.use("/api", router);

/*
SwaggerService.getInstance(app, {
  swagger: "2.0",
  info: {
    version: "0.0.1",
    title: "TOCC TOS API",
    description: "Test Object Specification API",
    contact: {
      name: "TOCC TOS API Support",
      url: "https://tocctos.volvocars.net",
      email: "tocctos@volvocars.com",
    },
    license: {
      name: "ISC",
    },
  },
  basePath: "/api/v1",
});
*/
//app.use("/api/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log("Listening to PORT: " + PORT);
});
