import { SwaggerEndpoint } from "./models/swagger-endpoint";
import { SwaggerService } from "./services/swagger-service";

export function Swagger(endpoint: SwaggerEndpoint) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("decorator");
    const service = SwaggerService.addEndpoint(endpoint);
  };
}
