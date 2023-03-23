import prismaClient from "../../prisma";

interface OrderRequest {
  purchase_orderId: string;
}

class RemoveOrderPurchaseService {
  async execute({ purchase_orderId }: OrderRequest) {
    const orderPurchase = await prismaClient.purchase_order.delete({
      where: {
        id: purchase_orderId,
      },
    });

    return orderPurchase;
  }
}

export { RemoveOrderPurchaseService };
