-- DropForeignKey
ALTER TABLE "Schedules" DROP CONSTRAINT "Schedules_userId_fkey";

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
