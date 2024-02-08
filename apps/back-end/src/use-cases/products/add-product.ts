import { ProductsRepository } from '@/repositories/products-repository'
import { Prisma } from '@prisma/client'
import { ProductAlreadyExistsError } from '../errors/product-already-exists-error'

export class AddProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(
    data: Prisma.ProductCreateInput,
    categoryName: string,
    domainName: string,
  ) {
    const productAlreadyExists =
      await this.productsRepository.findProductByName(
        data.name,
        categoryName,
        domainName,
      )

    if (productAlreadyExists) {
      throw new ProductAlreadyExistsError()
    }

    const product = await this.productsRepository.addProduct(
      data,
      categoryName,
      domainName,
    )

    return { product }
  }
}
