import prismaClient from "../../prisma";

interface ItemPurchaseRequest {
  purchase_orderId: string;
  productId: string;
  amount: number;
  supplierId: string;
  serviceId: string;
}

class AddItemPurchaseService {
  async execute({
    purchase_orderId,
    productId,
    amount,
    supplierId,
    serviceId,
  }: ItemPurchaseRequest) {
    const itemPurchase = await prismaClient.Item_Purchase.create({
      data: {
        purchase_orderId: purchase_orderId,
        productId: productId,
        supplierId: supplierId,
        serviceId: serviceId,
        amount: amount,
      },
    });

    return itemPurchase;
  }
}

export { AddItemPurchaseService };
