import prismaClient from "../../prisma";

interface DetailRequest {
  purchase_orderId: string;
}

class DetailOrderPurchaseService {
  async execute({ purchase_orderId }: DetailRequest) {
    const orders_purchase = await prismaClient.Item_Purchase.findMany({
      where: {
        purchase_orderId: purchase_orderId,
      },
      include: {
        purchase_order: true,
        product: true,
        service: true,
        supplier: true,
      },
    });

    return orders_purchase;
  }
}

export { DetailOrderPurchaseService };
