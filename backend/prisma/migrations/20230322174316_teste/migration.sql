-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_productId_fkey";

-- AlterTable
ALTER TABLE "items" ALTER COLUMN "productId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
