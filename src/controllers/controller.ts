import { Request, Response, NextFunction } from "express";

export class RootController {
  static async get200Response(req: Request, res: Response, next: NextFunction) {
    res.status(200).send({ hello: "hello", world: "world" });
  }
}
