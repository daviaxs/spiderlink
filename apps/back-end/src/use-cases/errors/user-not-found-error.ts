export class UserNotFoundError extends Error {
  constructor() {
    super('Credenciais inválidas')
  }
}
