import { NextFunction, Request, Response } from 'express';
import { IUserController, IUserService } from '../interfaces/user-interface';
import logger from '../../../../config/logger';
import { ServiceError } from '../../../../config/error';
import { StatusCodes } from '../../../../enums/status-code';

export default class UserController implements IUserController {
  private userService: IUserService;
  constructor(userService: IUserService) {
    this.userService = userService;
  }

  handle = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | any> => {
    logger.info('[UserController]:::Efetuando tentativa de cadastro');
    try {
      const { nome, email, senha } = request.body;

      const user = await this.userService.execute({
        nome,
        email,
        senha,
      });

      response.status(StatusCodes.CREATED).json(user);
      return next();
    } catch (error: any) {
      if (error.isAxiosError) {
        const errorMsg = 'Ocorreu um erro ao tentar cadastrar Usuário.';
        return next(new ServiceError(errorMsg));
      }
      next(error);
    }
  };
}
