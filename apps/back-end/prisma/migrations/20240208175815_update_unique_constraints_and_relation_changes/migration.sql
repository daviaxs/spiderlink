/*
  Warnings:

  - You are about to drop the column `SubsectionId` on the `options` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `ProductId` on the `subsections` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `subsections` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `SubsectionName` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryName` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ProductName` to the `subsections` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_SubsectionId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "subsections" DROP CONSTRAINT "subsections_ProductId_fkey";

-- AlterTable
ALTER TABLE "options" DROP COLUMN "SubsectionId",
ADD COLUMN     "SubsectionName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "categoryId",
ADD COLUMN     "categoryName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "subsections" DROP COLUMN "ProductId",
ADD COLUMN     "ProductName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");

-- CreateIndex
CREATE UNIQUE INDEX "subsections_name_key" ON "subsections"("name");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "categories"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subsections" ADD CONSTRAINT "subsections_ProductName_fkey" FOREIGN KEY ("ProductName") REFERENCES "products"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_SubsectionName_fkey" FOREIGN KEY ("SubsectionName") REFERENCES "subsections"("name") ON DELETE CASCADE ON UPDATE CASCADE;
