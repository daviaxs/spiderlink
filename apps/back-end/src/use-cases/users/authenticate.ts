import { UsersRepository } from '@/repositories/users-repository'
import { compare } from 'bcryptjs'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'
import { UserNotFoundError } from '../errors/user-not-found-error'
import { DomainsRepository } from '@/repositories/domains-repository'
import { User } from '@prisma/client'

interface AuthenticateParams {
  email: string
  password: string
  domainName?: string
}

interface AuthenticateResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private domainsRepository: DomainsRepository,
  ) {}

  async execute({
    email,
    password,
    domainName,
  }: AuthenticateParams): Promise<AuthenticateResponse> {
    const user = await this.usersRepository.findUserByEmail(email)

    if (!user) {
      throw new UserNotFoundError()
    }

    const doesPasswordMatch = await compare(password, user.password_hash)

    if (!doesPasswordMatch) {
      throw new InvalidCredentialsError()
    }

    if (domainName) {
      const domain = await this.domainsRepository.findDomainByName(domainName)

      if (!domain || domain?.id !== user.domainId) {
        throw new InvalidCredentialsError()
      }
    }

    return { user }
  }
}
