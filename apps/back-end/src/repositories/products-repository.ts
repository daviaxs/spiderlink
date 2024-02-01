import { Prisma, Products } from '@prisma/client'

export interface ProductsRepository {
  addProduct(product: Prisma.ProductsCreateInput): Promise<Products | null>
  updateProduct(product: Prisma.ProductsUpdateInput): Promise<Products | null>
  deleteProduct(id: string): Promise<void>
}
