import { Request, Response } from "express";
import { CreateClientsService } from "../../services/clients/CreateClientsService";

class CreateClientController {
  async handle(req: Request, res: Response) {
    const {
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
    } = req.body;

    const createClientsService = new CreateClientsService();

    if (!req.file) {
      throw new Error("error upload file");
    } else {
      const { originalname, filename: photo } = req.file;

      const client = await createClientsService.execute({
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
      });

      return res.json(client);
    }
  }
}

export { CreateClientController };
