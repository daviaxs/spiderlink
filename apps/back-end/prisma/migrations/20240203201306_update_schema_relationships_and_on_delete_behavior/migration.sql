/*
  Warnings:

  - You are about to drop the column `domainId` on the `Categories` table. All the data in the column will be lost.
  - You are about to drop the column `domainId` on the `Options` table. All the data in the column will be lost.
  - You are about to drop the column `domainId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `domainId` on the `Schedules` table. All the data in the column will be lost.
  - You are about to drop the column `domainId` on the `Subsections` table. All the data in the column will be lost.
  - Added the required column `domainName` to the `Categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domainName` to the `Options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domainName` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domainName` to the `Schedules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domainName` to the `Subsections` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_domainId_fkey";

-- DropForeignKey
ALTER TABLE "Options" DROP CONSTRAINT "Options_domainId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_domainId_fkey";

-- DropForeignKey
ALTER TABLE "Schedules" DROP CONSTRAINT "Schedules_domainId_fkey";

-- DropForeignKey
ALTER TABLE "Subsections" DROP CONSTRAINT "Subsections_domainId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_domainId_fkey";

-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "domainId",
ADD COLUMN     "domainName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Options" DROP COLUMN "domainId",
ADD COLUMN     "domainName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "domainId",
ADD COLUMN     "domainName" TEXT NOT NULL,
ADD COLUMN     "img" TEXT;

-- AlterTable
ALTER TABLE "Schedules" DROP COLUMN "domainId",
ADD COLUMN     "domainName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subsections" DROP COLUMN "domainId",
ADD COLUMN     "domainName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_domainName_fkey" FOREIGN KEY ("domainName") REFERENCES "Domain"("domainName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_domainName_fkey" FOREIGN KEY ("domainName") REFERENCES "Domain"("domainName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subsections" ADD CONSTRAINT "Subsections_domainName_fkey" FOREIGN KEY ("domainName") REFERENCES "Domain"("domainName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_domainName_fkey" FOREIGN KEY ("domainName") REFERENCES "Domain"("domainName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_domainName_fkey" FOREIGN KEY ("domainName") REFERENCES "Domain"("domainName") ON DELETE CASCADE ON UPDATE CASCADE;
