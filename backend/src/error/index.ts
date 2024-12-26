import { NextFunction, Request, Response } from "express";

export function ErrorHandler(error: any, request: Request, response: Response, next: NextFunction) {
    response.status(error.statusCode || 500).json(error.message)
}