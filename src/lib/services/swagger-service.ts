import { SwaggerSetup } from "./../models/swagger-endpoint";
import { SwaggerEndpoint } from "../models/swagger-endpoint";
import * as SwaggerUI from "swagger-ui-express";

export class SwaggerService {
  private static instance: SwaggerService;

  private static endpoints: SwaggerEndpoint[] = [];

  static getInstance(): SwaggerService {
    console.log("Instance");
    if (!SwaggerService.instance) {
      SwaggerService.instance = new SwaggerService();
    }

    return SwaggerService.instance;
  }

  static build(swaggerSetup: SwaggerSetup): object {
    let blueprint = { ...swaggerSetup, paths: {} };

    SwaggerService.endpoints.forEach((endpoint: SwaggerEndpoint) => {
      let hejsan = {
        [endpoint.method]: {
          tags: endpoint.tags,
          summary: endpoint.summary,
          description: endpoint.description,
          parameters: endpoint.parameters,
          responses: endpoint.responses,
        },
      };

      blueprint.paths.hasOwnProperty(endpoint.path) ? blueprint.paths

      this.swagger.paths[endpoint.path] = {
        ...(this.swagger.paths[endpoint.path]
          ? this.swagger.paths[endpoint.path]
          : {}),
        hejsan,
      };

      
      blueprint.paths = { ...blueprint.paths, endpoint };
      
      
    });
    return blueprint;
  }

  static serve(app: any, swaggerSetup: SwaggerSetup) {
    let swaggerJson = swaggerSetup;
  }
  /*
  private serveSwagger(app: any, swaggerSetup: SwaggerSetup): void {
    app.use("/swagger", SwaggerUI.serve, SwaggerUI.setup(swagger));
  }
*/
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
    /*
    let hejsan = {
      [endpoint.method]: {
        tags: endpoint.tags,
        summary: endpoint.summary,
        description: endpoint.description,
        parameters: endpoint.parameters,
        responses: endpoint.responses,
      },
    };

    this.swagger.paths[endpoint.path] = {
      ...(this.swagger.paths[endpoint.path]
        ? this.swagger.paths[endpoint.path]
        : {}),
      hejsan,
    };

    this.serveSwagger();
    */

    SwaggerService.endpoints.push(endpoint);
    console.log(SwaggerService.endpoints);
  }
}
