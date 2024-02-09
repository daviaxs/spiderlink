/*
  Warnings:

  - You are about to drop the column `SubsectionName` on the `options` table. All the data in the column will be lost.
  - You are about to drop the column `ProductName` on the `subsections` table. All the data in the column will be lost.
  - Added the required column `SubsectionId` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ProductId` to the `subsections` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_SubsectionName_fkey";

-- DropForeignKey
ALTER TABLE "subsections" DROP CONSTRAINT "subsections_ProductName_fkey";

-- AlterTable
ALTER TABLE "options" DROP COLUMN "SubsectionName",
ADD COLUMN     "SubsectionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "subsections" DROP COLUMN "ProductName",
ADD COLUMN     "ProductId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "subsections" ADD CONSTRAINT "subsections_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_SubsectionId_fkey" FOREIGN KEY ("SubsectionId") REFERENCES "subsections"("id") ON DELETE CASCADE ON UPDATE CASCADE;
