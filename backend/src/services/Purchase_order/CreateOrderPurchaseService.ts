import prismaClient from "../../prisma";

interface OrderPurchaseRequest {
  os: number;
  supplierId: string;
}

class CreateOrderPurchaseService {
  async execute({ os, supplierId }: OrderPurchaseRequest) {
    const order = await prismaClient.purchase_order.create({
      data: {
        os: os,
        supplierId: supplierId,
      },
    });

    return order;
  }
}

export { CreateOrderPurchaseService };
