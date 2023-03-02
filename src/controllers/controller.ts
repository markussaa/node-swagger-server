import { Request, Response, NextFunction } from "express";
import { Swagger } from "../lib/decorator";

export class RootController {
  @Swagger({
    method: "get",
    path: "/",
    tags: ["HelloWorld"],
    summary: "Get hello world object",
    description:
      "Gets a hello world object with properties and values of hello world",
    produces: ["application/json"],
    parameters: [],
    responses: {
      "200": {
        description: "Ok",
      },
    },
  })
  static async get200Response(req: Request, res: Response, next: NextFunction) {
    res.status(200).send({ hello: "hello", world: "world" });
  }

  @Swagger({
    method: "delete",
    path: "/",
    tags: ["HelloWorld"],
    summary: "Get hello world object",
    description:
      "Gets a hello world object with properties and values of hello world",
    produces: ["application/json"],
    parameters: [],
    responses: {
      "200": {
        description: "Ok",
      },
    },
  })
  static async delete200Response(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    res.status(200).send({ hello: "hello", world: "world" });
  }

  @Swagger({
    method: "put",
    path: "/",
    tags: ["HelloWorld"],
    summary: "Put hello world object",
    description:
      "Gets a hello world object with properties and values of hello world",
    produces: ["application/json"],
    parameters: [],
    responses: {
      "200": {
        description: "Ok",
      },
    },
  })
  static async put200Response(req: Request, res: Response, next: NextFunction) {
    res.status(200).send({ hello: "hello", world: "world" });
  }

  @Swagger({
    method: "get",
    path: "/different",
    tags: ["HelloWorld2"],
    summary: "Put hello world object",
    description:
      "Gets a hello world object with properties and values of hello world",
    produces: ["application/json"],
    parameters: [],
    responses: {
      "200": {
        description: "Ok",
      },
    },
  })
  static async get200Response2(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    res.status(200).send({ hello: "hello", world: "world" });
  }
}
