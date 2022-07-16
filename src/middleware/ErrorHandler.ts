import { NextFunction, Request, Response } from 'express';
import HttpException from '../errors/HttpException';

function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || 'Internal server error';
    response
        .status(status)
        .send({
            message,
            error: error,
            stackTrace: error.stack
        })
}

export default errorMiddleware;
