import { Prisma, Product } from '@prisma/client'

export interface ProductsRepository {
  addProduct(
    product: Prisma.ProductCreateInput,
    categoryId: string,
    domainId: string,
  ): Promise<Product>

  updateProduct(
    product: Prisma.ProductUpdateInput,
    domainId: string,
    productId: string,
  ): Promise<Product | null>

  deleteProduct(id: string, domainId: string): Promise<void>

  listProducts(categoryId: string, domainId: string): Promise<Product[]>

  findProductByName(
    productName: string,
    categoryId: string,
    domainId: string,
  ): Promise<Product | null>

  findProductById(productId: string): Promise<Product | null>
}
