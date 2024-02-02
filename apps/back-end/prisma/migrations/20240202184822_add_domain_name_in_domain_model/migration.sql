/*
  Warnings:

  - A unique constraint covering the columns `[domainName]` on the table `Domain` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `domainName` to the `Domain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Domain" ADD COLUMN     "domainName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Domain_domainName_key" ON "Domain"("domainName");
