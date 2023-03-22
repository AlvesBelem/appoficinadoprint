-- AlterTable
ALTER TABLE "items_purchases" ADD COLUMN     "supplierId" TEXT;

-- AddForeignKey
ALTER TABLE "items_purchases" ADD CONSTRAINT "items_purchases_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Suppliers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
