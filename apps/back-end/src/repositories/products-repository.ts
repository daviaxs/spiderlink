import { Prisma, Product } from '@prisma/client'

export interface ProductsRepository {
  addProduct(
    product: Prisma.ProductCreateInput,
    domainName: string,
  ): Promise<Product | null>

  updateProduct(
    product: Prisma.ProductUpdateInput,
    domainName: string,
    productId: string,
  ): Promise<Product | null>

  deleteProduct(id: string): Promise<void>

  listProducts(domainName: string, categoryName: string): Promise<Product[]>

  findProductByName(
    productName: string,
    categoryName: string,
    domainName: string,
  ): Promise<Product | null>
}
