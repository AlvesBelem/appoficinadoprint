import prismaClient from "../../prisma";

interface ClientRequest {
  name: string;
  nickname: String;
  email: String;
  whatsapp: String;
  contact: String;
  address: String;
  city: String;
  neighborhood: String;
  zipcode: String;
  photo: String;
}

class CreateClientsService {
  async execute({
    name,
    nickname,
    email,
    photo,
    whatsapp,
    address,
    contact,
    city,
    neighborhood,
    zipcode,
  }: ClientRequest) {
    const client = await prismaClient.client.create({
      data: {
        name: name,
        nickname: nickname,
        email: email,
        photo: photo,
        whatsapp: whatsapp,
        address: address,
        contact: contact,
        city: city,
        neighborhood: neighborhood,
        zipcode: zipcode,
      },
    });

    return client;
  }
}

export { CreateClientsService };
