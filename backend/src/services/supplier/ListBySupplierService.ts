import prismaClient from "../../prisma";

class ListBySupplierService {
  async execute() {
    const findBySupplier = await prismaClient.supplier.findMany();

    return findBySupplier;
  }
}

export { ListBySupplierService };
