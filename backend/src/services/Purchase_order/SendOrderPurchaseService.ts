import prismaClient from "../../prisma";

interface OrderRequest {
  purchase_orderId: string;
}

class SendOrderPurchaseService {
  async execute({ purchase_orderId }: OrderRequest) {
    const orderPurchase = await prismaClient.purchase_order.update({
      where: {
        id: purchase_orderId,
      },
      data: {
        draft: false,
      },
    });

    return orderPurchase;
  }
}

export { SendOrderPurchaseService };
