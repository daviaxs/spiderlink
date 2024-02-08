import { Category, Prisma } from '@prisma/client'

export interface CategoriesRepository {
  addCategory(
    category: Prisma.CategoryCreateInput,
    domainId: string,
  ): Promise<Category>

  deleteCategory(id: string, domainId: string): Promise<void>

  listCategories(domainId: string): Promise<Category[]>

  findCategoryByName(
    categoryName: string,
    domainId: string,
  ): Promise<Category | null>
}
