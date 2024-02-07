import { Categorie, Prisma } from '@prisma/client'

export interface CategoriesRepository {
  addCategory(
    category: Prisma.CategorieCreateInput,
    domainName: string,
  ): Promise<Categorie>
  deleteCategory(id: string): Promise<void>
  listCategories(domainName: string): Promise<Categorie[]>
}
