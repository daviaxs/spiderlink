import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { UserAlreadyEmailExistError } from './errors/user-already-email-exist-erro'

interface CreateAccountParams {
  email: string
  password: string
  domain: string
}

interface CreateAccountResponse {
  user: User
}

export class CreateAccountUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
    domain,
  }: CreateAccountParams): Promise<CreateAccountResponse> {
    const password_hash = await hash(password, 6)

    const findUserEmail = await this.usersRepository.findUserByEmail(email)

    if (findUserEmail) {
      throw new UserAlreadyEmailExistError()
    }

    const user = await this.usersRepository.createUser({
      email,
      domain,
      password_hash,
    })

    return { user }
  }
}
