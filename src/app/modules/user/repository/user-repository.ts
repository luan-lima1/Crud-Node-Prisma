import prismaClient from '../../../../config/prisma/database';
import {
  IUserRepository,
  IUserRequest,
  IUserResponse,
} from '../interfaces/user-interface';

export default class UserRepository implements IUserRepository {
  async create(data: IUserRequest): Promise<IUserResponse> {
    const { id, nome, email } = await prismaClient.user.create({
      data,
    });

    const response = {
      id,
      nome,
      email,
    };
    return response;
  }

  async findOneUser(id: string): Promise<IUserResponse | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        id,
      },
    });
    return user;
  }

  async findOneUserByEmail(email: string): Promise<IUserResponse | null> {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }
}
