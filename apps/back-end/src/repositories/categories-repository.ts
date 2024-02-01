export interface CategoriesRepository {
  addCategory(name: string): Promise<void>
  deleteCategory(id: string): Promise<void>
}
