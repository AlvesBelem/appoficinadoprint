import { Request, Response } from "express";
import { CreateSupplierService } from "../../services/supplier/CreateSupplierService";

class CreateSupplierController {
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

    const createSupplierService = new CreateSupplierService();

    if (!req.file) {
      throw new Error("error upload file");
    } else {
      const { originalname, filename: photo } = req.file;

      const supplier = await createSupplierService.execute({
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

      return res.json(supplier);
    }
  }
}

export { CreateSupplierController };
