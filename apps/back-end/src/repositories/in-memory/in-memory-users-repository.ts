import { UsersRepository } from '../users-repository'
import { randomUUID } from 'crypto'

interface UserParams {
  id: string
  email: string
  password_hash: string
  domain: string
  name: string | null
  phone: string | null
  cep: string | null
  address: string | null
  cnpj: string | null
  deliveryTime: string | null
}

export class InMemoryUsersRepository implements UsersRepository {
  public users: UserParams[] = []

  async createUser(data: UserParams) {
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

  async updateUser(id: string, data: UserParams) {
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
