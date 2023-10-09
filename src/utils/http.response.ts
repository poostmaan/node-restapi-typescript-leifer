import { Response } from "express";
import { HttpStatusCodes, JsonResponse } from "../types";

const httpRespond = (res: Response, statusCode: HttpStatusCodes, jsonRaw: JsonResponse) => {
  res.status(statusCode).json(jsonRaw);
};

export { httpRespond };
