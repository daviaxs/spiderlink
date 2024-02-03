import { UsersRepository } from '@/repositories/users-repository'
import { compare } from 'bcryptjs'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'
import { UserInterfaceParams } from '@/interfaces/user-interface'
import { UserNotFoundError } from '../errors/user-not-found-error'

interface AuthenticateParams {
  email: string
  password: string
}

interface AuthenticateResponse {
  user: UserInterfaceParams
}

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateParams): Promise<AuthenticateResponse> {
    const user = await this.usersRepository.findUserByEmail(email)

    if (!user) {
      throw new UserNotFoundError()
    }

    const doesPasswordMatch = await compare(password, user.password_hash)

    if (!doesPasswordMatch) {
      throw new InvalidCredentialsError()
    }

    return { user }
  }
}
