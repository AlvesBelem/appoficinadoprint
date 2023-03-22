import { Request, Response } from "express";
import { ListByProductsService } from "../../services/products/ListByProductsService";

class ListByProductsController {
  async handle(req: Request, res: Response) {
    const categoryId = req.query.categoryId as string;

    const listByProducts = new ListByProductsService();

    const products = await listByProducts.execute();

    return res.json(products);
  }
}

export { ListByProductsController };
