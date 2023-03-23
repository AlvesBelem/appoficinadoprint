import prismaClient from "../../prisma";

class ListOrderPurchaseService {
  async execute() {
    const ordersPurchases = await prismaClient.purchase_order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return ordersPurchases;
  }
}

export { ListOrderPurchaseService };
