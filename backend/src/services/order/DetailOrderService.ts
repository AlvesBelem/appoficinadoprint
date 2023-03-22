import prismaClient from "../../prisma";

interface DetailRequest {
  orderId: string;
}

class DetailOrderService {
  async execute({ orderId }: DetailRequest) {
    const orders = await prismaClient.item.findMany({
      where: {
        orderId: orderId,
      },
      include: {
        order: true,
        product: true,
        service: true,
        client: true,
      },
    });

    return orders;
  }
}

export { DetailOrderService };
