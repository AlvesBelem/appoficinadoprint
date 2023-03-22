import { Request, Response } from "express";
import { ListByServicesSevice } from "../../services/services/ListByServicesService";

class ListByServicesController {
  async handle(req: Request, res: Response) {
    const categoryId = req.query.categoryId as string;

    const listByServices = new ListByServicesSevice();

    const services = await listByServices.execute();

    return res.json(services);
  }
}

export { ListByServicesController };
