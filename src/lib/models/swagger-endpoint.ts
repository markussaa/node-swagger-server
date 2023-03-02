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

export interface SwaggerSetup {
  swagger: string;
  info: SwaggerInfo;
  basePath: string;
}

export interface SwaggerInfo {
  version: string;
  title: string;
  description: string;
  contact: SwaggerContact;
  license: SwaggerLicense;
}

export interface SwaggerContact {
  name: string;
  url: string;
  email: string;
}

export interface SwaggerLicense {
  [key: string]: {
    name: string;
  };
}
