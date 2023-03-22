import { Request, Response } from "express";
import { ListBySupplierService } from "../../services/supplier/ListBySupplierService";

class ListBySupplierController {
  async handle(req: Request, res: Response) {
    const supplierId = req.query.supplierId as string;

    const listBySupplier = new ListBySupplierService();

    const suppliers = await listBySupplier.execute();

    return res.json(suppliers);
  }
}

export { ListBySupplierController };
