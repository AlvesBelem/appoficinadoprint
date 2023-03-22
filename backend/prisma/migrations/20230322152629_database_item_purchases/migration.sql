-- CreateTable
CREATE TABLE "items_purchases" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT,
    "serviceId" TEXT,
    "purchase_orderId" TEXT,

    CONSTRAINT "items_purchases_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items_purchases" ADD CONSTRAINT "items_purchases_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_purchases" ADD CONSTRAINT "items_purchases_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_purchases" ADD CONSTRAINT "items_purchases_purchase_orderId_fkey" FOREIGN KEY ("purchase_orderId") REFERENCES "purchase_orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
