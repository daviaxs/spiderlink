import { Categories, Prisma } from '@prisma/client'

export interface CategoriesRepository {
  addCategory(
    category: Prisma.CategoriesCreateInput,
    domainName: string,
  ): Promise<Categories>
  deleteCategory(id: string): Promise<void>
  listCategories(domainName: string): Promise<Categories[]>
}
