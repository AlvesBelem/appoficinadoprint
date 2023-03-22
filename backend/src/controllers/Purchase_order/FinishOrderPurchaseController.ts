import { Request, Response } from "express";
import { FinishOrderPurchaseService } from "../../services/Purchase_order/FinishOrderPurchaseService";

class FinishOrderPurchaseController {
  async handle(req: Request, res: Response) {
    const { purchase_order } = req.body;

    const finishOrderPurchaseService = new FinishOrderPurchaseService();

    const orderPurchase = await finishOrderPurchaseService.execute({
      purchase_order,
    });

    return res.json(orderPurchase);
  }
}

export { FinishOrderPurchaseController };
