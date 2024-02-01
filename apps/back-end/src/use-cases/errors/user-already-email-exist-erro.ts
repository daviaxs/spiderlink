export class UserAlreadyEmailExistError extends Error {
  constructor() {
    super('Este email já está em uso')
  }
}
