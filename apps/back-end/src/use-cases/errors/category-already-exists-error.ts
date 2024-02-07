export class CategoryAlreadyExists extends Error {
  constructor() {
    super('Category Already exists')
  }
}
