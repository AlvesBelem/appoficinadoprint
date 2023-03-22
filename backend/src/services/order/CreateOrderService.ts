import prismaClient from "../../prisma";

interface OrderRequest {
  os: number;
  clientId: string;
}

class CreateOrderService {
  async execute({ os, clientId }: OrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        os: os,
        clientId: clientId,
      },
    });

    return order;
  }
}

export { CreateOrderService };
