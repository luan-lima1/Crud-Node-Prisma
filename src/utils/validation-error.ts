import { StatusCodes } from '../enums/status-code';

export declare class ResponseError extends Error {
  statusCode: StatusCodes;
  constructor(message: string, httpCode: StatusCodes);
}

export declare class ResponseDetailError extends ResponseError {
  detail: any | undefined;
  constructor(message: string, httpCode: StatusCodes, errors: any);
}

export declare class ValidationError extends ResponseDetailError {
  constructor(errors: any, message?: string);
}

export {};
