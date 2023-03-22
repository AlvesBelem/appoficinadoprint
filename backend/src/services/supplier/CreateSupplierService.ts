import prismaClient from "../../prisma";

interface SupplierRequest {
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

class CreateSupplierService {
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
  }: SupplierRequest) {
    const supplier = await prismaClient.supplier.create({
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

    return supplier;
  }
}

export { CreateSupplierService };
