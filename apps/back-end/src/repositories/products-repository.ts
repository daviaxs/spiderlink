import { Prisma, Product } from '@prisma/client'

export interface ProductsRepository {
  addProduct(
    product: Prisma.ProductCreateInput,
    categoryName: string,
    domainId: string,
  ): Promise<Product | null>

  updateProduct(
    product: Prisma.ProductUpdateInput,
    domainId: string,
    productId: string,
  ): Promise<Product | null>

  deleteProduct(id: string): Promise<void>

  listProducts(domainName: string, categoryName: string): Promise<Product[]>

  findProductByName(
    productName: string,
    categoryName: string,
    domainId: string,
  ): Promise<Product | null>

  findProductById(productId: string): Promise<Product | null>
}
