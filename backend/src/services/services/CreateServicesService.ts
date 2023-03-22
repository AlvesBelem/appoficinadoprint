import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  categoryId: string;
}

class CreateServicesService {
  async execute({
    name,
    price,
    description,
    banner,
    categoryId,
  }: ProductRequest) {
    const service = await prismaClient.service.create({
      data: {
        name: name,
        price: price,
        description: description,
        banner: banner,
        categoryId: categoryId,
      },
    });

    return service;
  }
}

export { CreateServicesService };
