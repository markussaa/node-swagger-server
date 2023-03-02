import express from "express";
import router from "./routes";
import { SwaggerService } from "./lib/services/swagger-service";
//import * as swaggerDocument from "./swagger.json";

const PORT = 3000;
const app = express();

app.use("/api/v1", router);

SwaggerService.serve(app, {
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

app.listen(PORT, () => {
  console.log("Listening to PORT: " + PORT);
});
