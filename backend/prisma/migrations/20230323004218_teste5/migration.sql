/*
  Warnings:

  - You are about to alter the column `stock` on the `products` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "products" ALTER COLUMN "stock" SET DATA TYPE INTEGER;
