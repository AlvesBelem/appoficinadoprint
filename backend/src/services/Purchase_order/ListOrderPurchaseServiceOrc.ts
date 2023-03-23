import prismaClient from "../../prisma";

class ListOrderPurchaseServiceOrc {
  async execute() {
    const ordersPurchases = await prismaClient.purchase_order.findMany({
      where: {
        draft: true,
        status: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return ordersPurchases;
  }
}

export { ListOrderPurchaseServiceOrc };
