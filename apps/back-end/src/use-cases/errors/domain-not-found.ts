export class DomainNotFoundError extends Error {
  constructor() {
    super('Domain not found')
  }
}
