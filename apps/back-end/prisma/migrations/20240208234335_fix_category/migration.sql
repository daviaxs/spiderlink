/*
  Warnings:

  - You are about to drop the column `categoryName` on the `products` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_categoryName_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "categoryName",
ADD COLUMN     "categoryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_id_fkey" FOREIGN KEY ("id") REFERENCES "categories"("name") ON DELETE CASCADE ON UPDATE CASCADE;
