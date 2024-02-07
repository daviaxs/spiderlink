import { Category, Prisma } from '@prisma/client'

export interface CategoriesRepository {
  addCategory(
    category: Prisma.CategoryCreateInput,
    domainName: string,
  ): Promise<Category>

  deleteCategory(id: string): Promise<void>

  listCategories(domainName: string): Promise<Category[]>

  findCategoryByName(
    categoryName: string,
    domainName: string,
  ): Promise<Category | null>
}
