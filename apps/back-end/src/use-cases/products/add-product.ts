import { Prisma } from '@prisma/client'
import { CategoryAlreadyExists } from '../errors/category-already-exists-error'
import { ProductsRepository } from '@/repositories/products-repository'
import { CategoriesRepository } from '@/repositories/categories-repository'

export class AddProductUseCase {
  constructor(
    private productsRepository: ProductsRepository,
    private categoriesRepository: CategoriesRepository,
  ) {}

  async execute(
    { img, name, price, description }: Prisma.ProductCreateInput,
    categoryId: string,
    domainId: string,
  ) {
    const productExists = await this.productsRepository.findProductByName(
      name,
      categoryId,
      domainId,
    )

    const categoryExists = await this.categoriesRepository.findCategoryByName(
      name,
      domainId,
    )

    if (productExists) {
      throw new Error(`Product already exists`)
    }

    if (categoryExists) {
      throw new CategoryAlreadyExists()
    }

    const product = await this.productsRepository.addProduct(
      {
        img,
        name,
        price,
        description,
        Category: {
          connect: {
            id: categoryId,
          },
        },
        Domain: {
          connect: {
            id: domainId,
          },
        },
      },
      categoryId,
      domainId,
    )

    return { product }
  }
}
