import { Request, Response } from "express";
import { RemoveOrderPurchaseService } from "../../services/Purchase_order/RemoveOrderPurchaseService";

class RemoveOrderPurchaseController {
  async handle(req: Request, res: Response) {
    const purchase_orderId = req.query.purchase_orderId as string;

    const removeOrder = new RemoveOrderPurchaseService();

    const orderPurchase = await removeOrder.execute({
      purchase_orderId,
    });

    return res.json(orderPurchase);
  }
}

export { RemoveOrderPurchaseController};
