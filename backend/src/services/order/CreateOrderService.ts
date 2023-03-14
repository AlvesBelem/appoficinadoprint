import prismaClient from "../../prisma";

interface OrderRequest {
  os: number;
  name: string;
}

class CreateOrderService {
  async execute({ os, name }: OrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        os: os,
        name: name,
      },
    });

    return order;
  }
}

export { CreateOrderService };
