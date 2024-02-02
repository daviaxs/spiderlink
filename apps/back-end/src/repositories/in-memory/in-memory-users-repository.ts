import { UserInterfaceParams } from '@/interfaces/user-interface'
import { UsersRepository } from '../users-repository'
import { randomUUID } from 'crypto'

export class InMemoryUsersRepository implements UsersRepository {
  public users: UserInterfaceParams[] = []

  async createUser(data: UserInterfaceParams) {
    const user = {
      id: randomUUID(),
      email: data.email,
      password_hash: data.password_hash,
      domain: data.domain,
      name: data.name,
      phone: data.phone,
      cep: data.cep,
      address: data.address,
      cnpj: data.cnpj,
      deliveryTime: data.deliveryTime,
    }

    this.users.push(user)

    return user
  }

  async findUserByEmail(email: string) {
    const user = this.users.find((user) => user.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async findUserById(id: string) {
    const user = this.users.find((user) => user.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async updateUser(id: string, data: UserInterfaceParams) {
    const userIndex = this.users.findIndex((user) => user.id === id)

    if (!userIndex) {
      return null
    }

    this.users[userIndex] = {
      ...this.users[userIndex],
      ...data,
    }

    return this.users[userIndex]
  }

  async deleteUser(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id)

    if (!userIndex) return

    this.users.splice(userIndex, 1)
  }
}
