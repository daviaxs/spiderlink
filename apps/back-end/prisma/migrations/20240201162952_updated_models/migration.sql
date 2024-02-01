-- DropForeignKey
ALTER TABLE "Options" DROP CONSTRAINT "Options_SubsectionId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Subsections" DROP CONSTRAINT "Subsections_ProductId_fkey";

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subsections" ADD CONSTRAINT "Subsections_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_SubsectionId_fkey" FOREIGN KEY ("SubsectionId") REFERENCES "Subsections"("id") ON DELETE CASCADE ON UPDATE CASCADE;
