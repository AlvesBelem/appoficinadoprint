import prismaClient from "../../prisma";

class ListByServicesSevice {
  async execute() {
    const findByCategory = await prismaClient.service.findMany();

    return findByCategory;
  }
}

export { ListByServicesSevice };
