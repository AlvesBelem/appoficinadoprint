import { Request, Response } from "express";
import { DetailOrderPurchaseService } from "../../services/Purchase_order/DetailOrderPurchaseService";

class DetailOrderPurchaseController {
  async handle(req: Request, res: Response) {
    const purchase_orderId = req.query.purchase_orderId as string;

    const detailOrderPurchaseService = new DetailOrderPurchaseService();

    const orders_purchase = await detailOrderPurchaseService.execute({
      purchase_orderId,
    });

    return res.json(orders_purchase);
  }
}

export { DetailOrderPurchaseController };
