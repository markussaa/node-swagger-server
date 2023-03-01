export interface SwaggerEndpoint {
  method: string;
  path: string;
  tags: Array<string>;
  summary: string;
  description: string;
  produces: Array<string>;
  parameters: Array<SwaggerParameter>;
  responses: SwaggerResponses;
}

export interface SwaggerParameter {
  name: string;
  in: string;
  required: boolean;
  type: string;
}

export interface SwaggerResponses {
  [key: string]: SwaggerResponse;
}

export interface SwaggerResponse {
  description: string;
}
