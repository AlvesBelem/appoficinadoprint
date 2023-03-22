import prismaClient from "../../prisma";

interface OrderPurchaseRequest {
  purchase_order: string;
}

class FinishOrderPurchaseService {
  async execute({ purchase_order }: OrderPurchaseRequest) {
    const orderPurchase = await prismaClient.purchase_order.update({
      where: {
        id: purchase_order,
      },
      data: {
        status: true,
      },
    });

    return orderPurchase;
  }
}

export { FinishOrderPurchaseService };
