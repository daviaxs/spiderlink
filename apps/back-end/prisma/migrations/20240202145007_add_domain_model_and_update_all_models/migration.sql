/*
  Warnings:

  - You are about to drop the column `userId` on the `Categories` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Options` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Schedules` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Subsections` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cnpj` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryTime` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `domain` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_userId_fkey";

-- DropForeignKey
ALTER TABLE "Options" DROP CONSTRAINT "Options_userId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_userId_fkey";

-- DropForeignKey
ALTER TABLE "Schedules" DROP CONSTRAINT "Schedules_userId_fkey";

-- DropForeignKey
ALTER TABLE "Subsections" DROP CONSTRAINT "Subsections_userId_fkey";

-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "userId",
ADD COLUMN     "domainId" TEXT;

-- AlterTable
ALTER TABLE "Options" DROP COLUMN "userId",
ADD COLUMN     "domainId" TEXT;

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "userId",
ADD COLUMN     "domainId" TEXT;

-- AlterTable
ALTER TABLE "Schedules" DROP COLUMN "userId",
ADD COLUMN     "domainId" TEXT;

-- AlterTable
ALTER TABLE "Subsections" DROP COLUMN "userId",
ADD COLUMN     "domainId" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "cep",
DROP COLUMN "cnpj",
DROP COLUMN "deliveryTime",
DROP COLUMN "domain",
DROP COLUMN "name",
DROP COLUMN "phone",
ADD COLUMN     "domainId" TEXT;

-- CreateTable
CREATE TABLE "Domain" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cnpj" TEXT,
    "deliveryTime" TEXT NOT NULL,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subsections" ADD CONSTRAINT "Subsections_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE SET NULL ON UPDATE CASCADE;
