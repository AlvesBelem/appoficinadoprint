import { Request, Response } from "express";
import { AddItemPurchaseService } from "../../services/Purchase_order/AddItemPurchaseService";

class AddItemPurchaseController {
  async handle(req: Request, res: Response) {
    const { purchase_orderId, productId, amount, supplierId, serviceId } =
      req.body;

    const addItemPurchase = new AddItemPurchaseService();

    const itemPurchase = await addItemPurchase.execute({
      purchase_orderId,
      productId,
      supplierId,
      serviceId,
      amount,
    });

    return res.json(itemPurchase);
  }
}

export { AddItemPurchaseController };
