import { SwaggerSetup } from "./../models/swagger-endpoint";
import { SwaggerEndpoint } from "../models/swagger-endpoint";
import * as SwaggerUI from "swagger-ui-express";

export class SwaggerService {
  private static endpoints: SwaggerEndpoint[] = [];

  static build(swaggerSetup: SwaggerSetup): object {
    let paths: any = {};

    SwaggerService.endpoints.forEach((endpoint: SwaggerEndpoint) => {
      let newEndpoint = {
        [endpoint.method]: {
          tags: endpoint.tags,
          summary: endpoint.summary,
          description: endpoint.description,
          parameters: endpoint.parameters,
          responses: endpoint.responses,
        },
      };

      paths[endpoint.path] = {
        ...(paths[endpoint.path] ? paths[endpoint.path] : {}),
        ...newEndpoint,
      };
    });

    return { ...swaggerSetup, paths };
  }

  static serve(app: any, swaggerSetup: SwaggerSetup) {
    app.use(
      "/api/swagger",
      SwaggerUI.serve,
      SwaggerUI.setup(SwaggerService.build(swaggerSetup))
    );
  }

  static addEndpoint(endpoint: SwaggerEndpoint): void {
    SwaggerService.endpoints.push(endpoint);
  }
}
