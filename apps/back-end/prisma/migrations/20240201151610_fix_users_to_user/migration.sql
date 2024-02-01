/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

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

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "cep" TEXT,
    "address" TEXT,
    "cnpj" TEXT,
    "deliveryTime" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subsections" ADD CONSTRAINT "Subsections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
