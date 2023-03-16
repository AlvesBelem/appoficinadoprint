import prismaClient from "../../prisma";

class ListByProductsService {
  async execute() {
    const findByCategory = await prismaClient.product.findMany();

    return findByCategory;
  }
}

export { ListByProductsService };
