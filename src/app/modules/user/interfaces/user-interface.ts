import { NextFunction, Request, Response } from 'express';

// request e response de dados

export interface IUserRequest {
  nome: string;
  email: string;
  senha: string;
}

export interface IUserResponse {
  id: string;
  nome: string;
  email: string;
}

//////////////////////////////////////////////////////////////
// Interfaces e métodos do User-Repository
export interface IUserRepository {
  create(data: IUserRequest): Promise<IUserResponse>;

  findOneUser(id: string): Promise<IUserResponse | null>;

  findOneUserByEmail(email: string): Promise<IUserResponse | null>;
}

//////////////////////////////////////////////////////////////
//interfaces e método do User-Controller
export interface IUserController {
  handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | any>;
}

//////////////////////////////////////////////////////////////
// Interfaces do User-Services
export interface IUserServiceRequest {
  nome: string;
  email: string;
  senha: string;
}

export interface IUserService {
  execute(data: IUserServiceRequest): Promise<IUserResponse | void>;
}
