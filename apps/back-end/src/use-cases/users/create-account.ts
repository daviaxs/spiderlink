import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyEmailExistError } from '../errors/user-already-email-exist-erro'
import { DomainNotFoundError } from '../errors/domain-not-found'
import { DomainsRepository } from '@/repositories/domains-repository'
import { User } from '@prisma/client'

interface CreateAccountParams {
  email: string
  password: string
  domainId?: string
}

interface CreateAccountResponse {
  user: User
}

export class CreateAccountUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private domainsRepository: DomainsRepository,
  ) {}

  async execute({
    email,
    password,
    domainId,
  }: CreateAccountParams): Promise<CreateAccountResponse> {
    const password_hash = await hash(password, 6)

    const findUserEmail = await this.usersRepository.findUserByEmail(email)

    if (findUserEmail) {
      throw new UserAlreadyEmailExistError()
    }

    let domain
    if (domainId) {
      domain = await this.domainsRepository.findDomainById(domainId)

      if (!domain) {
        throw new DomainNotFoundError()
      }
    }

    const user = await this.usersRepository.createUser({
      email,
      password_hash,
      ...(domainId && {
        Domain: {
          connect: {
            id: domainId,
          },
        },
      }),
    })

    return { user }
  }
}
