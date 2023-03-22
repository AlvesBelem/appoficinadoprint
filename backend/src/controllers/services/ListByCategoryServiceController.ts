import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/services/ListByCategoryService";

class ListByCategoryServiceController {
  async handle(req: Request, res: Response) {
    const categoryId = req.query.categoryId as string;

    const listByCategory = new ListByCategoryService();

    const services = await listByCategory.execute({
      categoryId,
    });

    return res.json(services);
  }
}

export { ListByCategoryServiceController };
