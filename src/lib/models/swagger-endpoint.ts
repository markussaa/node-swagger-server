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
  jsonSchemaDialect?: string;
  servers?: SwaggerServer[];
  paths?: SwaggerPaths;
  webHooks?: SwaggerWebHook[];
  components?: SwaggerComponents;
  security?: SwaggerSecurity[];
  tags?: SwaggerTag[];
  externalDocs?: SwaggerExternalDocuments;
  basePath: string;
}

export interface SwaggerInfo {
  title: string;
  summary?: string;
  description?: string;
  termsOfService?: string;
  contact?: SwaggerContact;
  license?: SwaggerLicense;
  version: string;
}

export interface SwaggerContact {
  name?: string;
  url?: string;
  email?: string;
}

export interface SwaggerLicense {
  name: string;
  identifier?: string;
  url?: string;
}

export interface SwaggerServer {
  url: string;
  description?: string;
  variables?: SwaggerServerVariable[];
}

export interface SwaggerServerVariable {
  enum?: string[];
  default: string;
  description?: string;
}

export interface SwaggerPaths {
  path: SwaggerPathItem;
}

export interface SwaggerWebHook {}

export interface SwaggerComponents {}

export interface SwaggerSchema {}

export interface SwaggerParameter {}

export interface SwaggerExample {}

export interface SwaggerRequestBody {}

export interface SwaggerHeader {}

export interface SwaggerSecurityScheme {}

export interface SwaggerLink {}

export interface SwaggerCallback {}

export interface SwaggerPathItem {}

export interface SwaggerReference {}

export interface SwaggerSecurity {}

export interface SwaggerTag {}

export interface SwaggerExternalDocuments {}
