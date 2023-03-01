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
    return JSON.stringify(endpoint);
  }
}
