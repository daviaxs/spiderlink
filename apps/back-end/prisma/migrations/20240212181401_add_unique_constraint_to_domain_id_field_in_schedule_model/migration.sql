/*
  Warnings:

  - A unique constraint covering the columns `[domainId]` on the table `schedules` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "schedules_domainId_key" ON "schedules"("domainId");
