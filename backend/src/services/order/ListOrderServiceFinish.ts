import prismaClient from "../../prisma";

class ListOrderServiceFinish {
  async execute() {
    const orders = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return orders;
  }
}

export { ListOrderServiceFinish };
