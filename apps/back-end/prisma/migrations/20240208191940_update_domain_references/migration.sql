/*
  Warnings:

  - You are about to drop the column `domainName` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `domainName` on the `options` table. All the data in the column will be lost.
  - You are about to drop the column `domainName` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `domainName` on the `schedules` table. All the data in the column will be lost.
  - You are about to drop the column `domainName` on the `subsections` table. All the data in the column will be lost.
  - Added the required column `domainId` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domainId` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domainId` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domainId` to the `schedules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domainId` to the `subsections` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_domainName_fkey";

-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_domainName_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_domainName_fkey";

-- DropForeignKey
ALTER TABLE "schedules" DROP CONSTRAINT "schedules_domainName_fkey";

-- DropForeignKey
ALTER TABLE "subsections" DROP CONSTRAINT "subsections_domainName_fkey";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "domainName",
ADD COLUMN     "domainId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "options" DROP COLUMN "domainName",
ADD COLUMN     "domainId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "domainName",
ADD COLUMN     "domainId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "schedules" DROP COLUMN "domainName",
ADD COLUMN     "domainId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "subsections" DROP COLUMN "domainName",
ADD COLUMN     "domainId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "domains"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "domains"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subsections" ADD CONSTRAINT "subsections_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "domains"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "domains"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "domains"("id") ON DELETE CASCADE ON UPDATE CASCADE;
