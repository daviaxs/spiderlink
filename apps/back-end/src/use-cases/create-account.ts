import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyEmailExistError } from './errors/user-already-email-exist-erro'
import { UserInterfaceParams } from '@/interfaces/user-interface'

interface CreateAccountParams {
  email: string
  password: string
  domain: string
}

interface CreateAccountResponse {
  user: UserInterfaceParams
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