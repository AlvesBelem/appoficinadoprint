import prismaClient from "../../prisma";

class ListByClientService {
  async execute() {
    const findByClients = await prismaClient.client.findMany();

    return findByClients ;
  }
}

export { ListByClientService };

