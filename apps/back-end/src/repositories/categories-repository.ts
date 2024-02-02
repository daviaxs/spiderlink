import { Categories, Prisma } from '@prisma/client'

export interface CategoriesRepository {
  addCategory(category: Prisma.CategoriesCreateInput): Promise<Categories>
  deleteCategory(id: string): Promise<void>
  listCategories(domainName: string): Promise<Categories[]>
}
