import { Request, Response } from "express";
import { CreateServicesService } from "../../services/services/CreateServicesService";

class CreateServiceController {
  async handle(req: Request, res: Response) {
    const { name, price, description, banner, categoryId } = req.body;

    const createServicesService = new CreateServicesService();

    if (!req.file) {
      throw new Error("error upload file");
    } else {
      const { originalname, filename: banner } = req.file;

      const service = await createServicesService.execute({
        name,
        price,
        description,
        banner,
        categoryId,
      });

      return res.json(service);
    }
  }
}

export { CreateServiceController };
