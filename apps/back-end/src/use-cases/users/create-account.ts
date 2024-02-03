import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyEmailExistError } from '../errors/user-already-email-exist-erro'
import { UserInterfaceParams } from '@/interfaces/user-interface'
import { DomainNotFoundError } from '../errors/domain-not-found'
import { DomainsRepository } from '@/repositories/domains-repository'

interface CreateAccountParams {
  email: string
  password: string
  domainId: string
}

interface CreateAccountResponse {
  user: UserInterfaceParams
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

    const domain = await this.domainsRepository.findDomain(domainId)

    if (!domain) {
      throw new DomainNotFoundError()
    }

    if (findUserEmail) {
      throw new UserAlreadyEmailExistError()
    }

    const user = await this.usersRepository.createUser({
      email,
      password_hash,
      Domain: {
        connect: {
          id: domainId,
        },
      },
    })

    return { user }
  }
}
