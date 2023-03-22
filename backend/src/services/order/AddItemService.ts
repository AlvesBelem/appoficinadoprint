import prismaClient from "../../prisma";

interface ItemRequest {
  orderId: string;
  productId: string;
  amount: number;
  clientId: string;
  serviceId: string;
}

class AddItemService {
  async execute({
    orderId,
    productId,
    amount,
    clientId,
    serviceId,
  }: ItemRequest) {
    const order = await prismaClient.item.create({
      data: {
        orderId: orderId,
        productId: productId,
        clientId: clientId,
        serviceId: serviceId,
        amount: amount,
      },
    });

    return order;
  }
}

export { AddItemService };
