-- AlterTable
ALTER TABLE "items" ADD COLUMN     "clientId" TEXT;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
