export interface SwaggerEndpoint {
  method: string;
  path: string;
  tags: [string | SwaggerTag];
  summary: string;
  description: string;
  produces: string[];
  parameters: SwaggerParameter[];
  responses: SwaggerResponses;
}

export interface SwaggerParameter {
  name: string;
  in: string;
  required: boolean;
  type: string;
}

export interface SwaggerResponses {
  [key: string]: SwaggerResponse | SwaggerReference;
}

export interface SwaggerResponse {
  description: string;
  headers?: [{ [key: string]: SwaggerHeader | SwaggerReference }];
  content?: [{ [key: string]: SwaggerMediaType | SwaggerReference }];
  links?: [{ [key: string]: SwaggerLink | SwaggerReference }];
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerBase {
  swagger: string;
  info: SwaggerInfo;
  jsonSchemaDialect?: string;
  servers?: SwaggerServer[];
  paths?: SwaggerPaths;
  webHooks?: [{ [key: string]: SwaggerPathItem | SwaggerReference }];
  components?: SwaggerComponents;
  security?: SwaggerSecurityRequirement[];
  tags?: SwaggerTag[];
  externalDocs?: SwaggerExternalDocuments;
  basePath: string;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerInfo {
  title: string;
  summary?: string;
  description?: string;
  termsOfService?: string;
  contact?: SwaggerContact;
  license?: SwaggerLicense;
  version: string;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerContact {
  name?: string;
  url?: string;
  email?: string;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerLicense {
  name: string;
  identifier?: string;
  url?: string;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerServer {
  url: string;
  description?: string;
  variables?: [{ [key: string]: SwaggerServerVariable }];
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerServerVariable {
  enum?: string[];
  default: string;
  description?: string;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerPaths {
  paths: SwaggerPathItem;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerComponents {
  schemas?: [{ [key: string]: SwaggerSchema[] }];
  responses?: [{ [key: string]: SwaggerResponse | SwaggerReference }];
  parameters?: [{ [key: string]: SwaggerParameter | SwaggerReference }];
  examples?: [{ [key: string]: SwaggerExample | SwaggerReference }];
  requestBodies?: [{ [key: string]: SwaggerRequestBody | SwaggerReference }];
  headers?: [{ [key: string]: SwaggerHeader | SwaggerReference }];
  securitySchemes?: [{ [key: string]: SwaggerSecurityScheme | SwaggerReference }];
  links?: [{ [key: string]: SwaggerLink | SwaggerReference }];
  callbacks?: [{ [key: string]: SwaggerCallback | SwaggerReference }];
  pathItems?: [{ [key: string]: SwaggerPathItem | SwaggerReference }];
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerOperation {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: SwaggerExternalDocuments;
  operationId?: string;
  parameters?: SwaggerParameter | SwaggerReference;
  requestBody?: SwaggerParameter | SwaggerReference;
  responses?: SwaggerResponses;
  callbacks?: [{ [key: string]: SwaggerCallback | SwaggerReference }];
  deprecated?: boolean;
  security?: SwaggerSecurityRequirement;
  servers?: SwaggerServer[];
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerSchema {
  discriminator?: SwaggerDisciminator;
  xml?: SwaggerXml;
  externalDocs?: SwaggerExternalDocuments;
  example?: any; // DEPRECATED
}

export interface SwaggerDisciminator {
  propertyName: string;
  mapping?: [{ [key: string]: string }]
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerXml {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerParameter {
  name: string;
  in: string;
  description?: string;
  required: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: SwaggerSchema;
  example?: any;
  examples?: [{ [key: string]: SwaggerExample | SwaggerReference }];
  content?: [{ [key: string]: SwaggerMediaType | SwaggerReference }];
}

export interface SwaggerMediaType {
  schema?: SwaggerSchema;
  example?: any;
  examples?: [{ [key: string]: SwaggerExample | SwaggerReference }];
  encoding?: [{ [key: string]: SwaggerEncoding }];
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerEncoding {
  contentType?: string;
  headers?: [{ [key: string]: SwaggerHeader | SwaggerReference }];
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerExample {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerRequestBody {
  description?: string;
  content: [{ [key: string]: SwaggerMediaType }];
  required?: false;
  extension?: SwaggerSpecificationExtension;
}

// Issue: https://swagger.io/specification/#header-object
export interface SwaggerHeader {
  description?: string;
  required: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: SwaggerSchema;
  example?: any;
  examples?: [{ [key: string]: SwaggerExample | SwaggerReference }];
  content?: [{ [key: string]: SwaggerMediaType | SwaggerReference }];

}

export interface SwaggerSecurityScheme {
  type: string;
  description?: string;
  name: string;
  in: string;
  scheme: string;
  baseFormat: string;
  flows: SwaggerOauthFlows;
  openIdConnectUrl: string;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerOauthFlows {
  implicit?: SwaggerOauthFlow;
  password?: SwaggerOauthFlow;
  clientCredentials?: SwaggerOauthFlow;
  authorizationCode?: SwaggerOauthFlow;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerOauthFlow {
  authorizationUrl: string;
  tokenUrl: string;
  refreshUrl?: string;
  scopes: [{ [key: string]: string }];
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerSecurityRequirement {
  [key: string]: string[];
}

export interface SwaggerLink {
  operationRef?: string;
  operationId?: string;
  parameters?: [{ [key: string]: any }];
  requestBody?: any;
  description?: string;
  server?: SwaggerServer;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerCallback {
  [key: string]: SwaggerPathItem | SwaggerReference;
}

export interface SwaggerPathItem {
  $ref?: string;
  summary?: string;
  description?: string;
  get?: SwaggerOperation;
  put?: SwaggerOperation;
  post?: SwaggerOperation;
  delete?: SwaggerOperation;
  options?: SwaggerOperation;
  head?: SwaggerOperation;
  patch?: SwaggerOperation;
  trace?: SwaggerOperation;
  servers?: SwaggerServer[];
  parameters?: [SwaggerParameter | SwaggerReference];
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerReference {
  $ref: string;
  summary?: string;
  description?: string;
}

export interface SwaggerTag {
  name: string;
  description?: string;
  externalDocs: SwaggerExternalDocuments;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerExternalDocuments {
  description?: string;
  url: string;
  extension?: SwaggerSpecificationExtension;
}

export interface SwaggerSpecificationExtension {
  [key: string]: any;
}
