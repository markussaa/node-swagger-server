import { SwaggerSetup } from "./../models/swagger-endpoint";
import { SwaggerEndpoint } from "../models/swagger-endpoint";
import * as SwaggerUI from "swagger-ui-express";

export class SwaggerService {
  private static swagger: any;
  private static app: any;
  private static instance: SwaggerService;

  private constructor(app: any, swaggerSetup: SwaggerSetup) {
    SwaggerService.app = app;
    SwaggerService.swagger = { ...swaggerSetup, paths: {} };
  }

  static getInstance(): SwaggerService {
    if (!SwaggerService.instance) {
      SwaggerService.instance = new SwaggerService();
    }

    return SwaggerService.instance;
  }

  private static serveSwagger(): void {
    SwaggerService.app.use(
      "/swagger",
      SwaggerUI.serve,
      SwaggerUI.setup(SwaggerService.swagger)
    );
  }

  static addEndpoint(endpoint: SwaggerEndpoint): void {
    /* const swagger = {
      swagger: "2.0",
      info: {},
      basePath: "/api/v1",
      consumes: "application/json",
      produces: "application/json",
      paths: {
        [endpoint.path]: {
          [endpoint.method]: {
            tags: endpoint.tags,
            summary: endpoint.summary,
            description: endpoint.description,
            parameters: endpoint.parameters,
            responses: endpoint.responses,
          },
        },
      },
    }; */

    let hejsan = {
      [endpoint.method]: {
        tags: endpoint.tags,
        summary: endpoint.summary,
        description: endpoint.description,
        parameters: endpoint.parameters,
        responses: endpoint.responses,
      },
    };

    SwaggerService.swagger.paths[endpoint.path] = {
      ...(SwaggerService.swagger.paths[endpoint.path]
        ? SwaggerService.swagger.paths[endpoint.path]
        : {}),
      hejsan,
    };

    SwaggerService.serveSwagger();
  }
}
