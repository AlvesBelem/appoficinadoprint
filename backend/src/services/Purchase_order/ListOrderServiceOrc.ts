import prismaClient from "../../prisma";

class ListOrderServiceOrc {
  async execute() {
    const orders = await prismaClient.order.findMany({
      where: {
        draft: true,
        status: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return orders;
  }
}

export { ListOrderServiceOrc };
