import { CategoriesRepository } from '@/repositories/categories-repository'
import { Prisma } from '@prisma/client'
import { CategoryAlreadyExists } from '../errors/category-already-exists-error'

export class AddCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({ name }: Prisma.CategoryCreateInput, domainName: string) {
    const categoryExists = await this.categoriesRepository.findCategoryByName(
      name,
      domainName,
    )

    if (categoryExists) {
      throw new CategoryAlreadyExists()
    }

    const category = await this.categoriesRepository.addCategory(
      {
        name,
        Domain: {
          connect: {
            domainName,
          },
        },
      },
      domainName,
    )

    return { category }
  }
}
