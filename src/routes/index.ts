import { RootController } from "./../controllers/controller";
import express, { NextFunction, Request, Response } from "express";

const use =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

const router = express.Router();

router.get("/", use(RootController.get200Response));

export = router;
