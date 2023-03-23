import prismaClient from "../../prisma";

interface ItemRequest {
  purchaseItemId: string;
}

class RemoveItemPurchaseService {
  async execute({ purchaseItemId }: ItemRequest) {
    const orderPurchase = await prismaClient.Item_Purchase.delete({
      where: {
        id: purchaseItemId,
      },
    });

    return orderPurchase;
  }
}

export { RemoveItemPurchaseService };
