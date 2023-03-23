import prismaClient from "../../prisma";

class ListOrderPurchaseServiceFinish {
  async execute() {
    const ordersPurchases = await prismaClient.purchase_order.findMany({
      where: {
        draft: false,
        status: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return ordersPurchases;
  }
}

export { ListOrderPurchaseServiceFinish };
