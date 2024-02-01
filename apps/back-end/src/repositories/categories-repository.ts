export interface CategoriesRepository {
  addCategory(name: string): Promise<void>
  deleteCategory(id: number): Promise<void>
}
