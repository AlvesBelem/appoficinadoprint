import prismaClient from "../../prisma";

interface ProductRequest {
  categoryId: string;
}

class ListByCategoryService {
  async execute({ categoryId }: ProductRequest) {
    const findByCategory = await prismaClient.service.findMany();

    return findByCategory;
  }
}

export { ListByCategoryService };
