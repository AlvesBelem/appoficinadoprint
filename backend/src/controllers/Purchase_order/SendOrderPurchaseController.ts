import { Request, Response } from "express";
import { SendOrderPurchaseService } from "../../services/Purchase_order/SendOrderPurchaseService";

class SendOrderPurchaseController {
  async handle(req: Request, res: Response) {
    const { purchase_orderId } = req.body;

    const sendOrderPurchase = new SendOrderPurchaseService();

    const orderPurchase = await sendOrderPurchase.execute({
      purchase_orderId,
    });

    return res.json(orderPurchase);
  }
}

export { SendOrderPurchaseController };
