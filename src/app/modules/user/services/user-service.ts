import logger from '../../../../config/logger';
import {
  IUserRepository,
  IUserResponse,
  IUserService,
  IUserServiceRequest,
} from '../interfaces/user-interface';

export default class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(data: IUserServiceRequest): Promise<IUserResponse | void> {
    logger.info('[UserService]::: Cadastrando Usuário');

    try {
      const emailExists = await this.userRepository.findOneUserByEmail(
        data.email,
      );

      if (emailExists) {
        throw new Error('Email cadastrado');
      }

      const response = await this.userRepository.create({
        ...data,
      });
      logger.info('[UserService]::: Usuário cadastrado com Sucesso.');
      return response;
    } catch (error) {
      const errorMsg = 'Ocorreu um erro!';
      logger.info('[UserService]::: Erro ao cadastrar teste');
      throw new Error(errorMsg);
    }
  }
}
