import { Request, Response } from "express";
import { CreateOrderPurchaseService } from "../../services/Purchase_order/CreateOrderPurchaseService";

class CreateOrderPurchaseController {
  async handle(req: Request, res: Response) {
    const { os, supplierId } = req.body;

    const createOrderPurchaseService = new CreateOrderPurchaseService();

    const order_purchase = await createOrderPurchaseService.execute({
      os,
      supplierId,
    });

    return res.json(order_purchase);
  }
}

export { CreateOrderPurchaseController };
