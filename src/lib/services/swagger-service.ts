import { SwaggerEndpoint } from "../models/swagger-endpoint";

export class SwaggerService {
  private static instance: SwaggerService;

  private constructor() {}

  static getInstance(): SwaggerService {
    if (!SwaggerService.instance) {
      SwaggerService.instance = new SwaggerService();
    }

    return SwaggerService.instance;
  }

  composeSwaggerJson(endpoint: SwaggerEndpoint): string {
    const swagger = {
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
    };

    return JSON.stringify(swagger);
  }
}
