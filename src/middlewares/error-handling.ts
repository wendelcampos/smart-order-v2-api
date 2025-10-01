import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { AppError } from "@/utils/AppError";

const errorHandling: ErrorRequestHandler = (error, request, response, next) => {
  if(error instanceof AppError) {
    response.status(error.statusCode).json({ message: error.message })
    return
  }

  if(error instanceof ZodError) {
    response.status(401).json({ message: "validation error", issues: error.format()})
    return
  }

  response.status(500).json({ message: error.message })
  return
}

export { errorHandling }