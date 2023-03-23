import { Request, Response } from "express";
import { RemoveItemPurchaseService } from "../../services/Purchase_order/RemoveItemPurchaseService";

class RemoveItemPurchaseController {
  async handle(req: Request, res: Response) {
    const purchaseItemId = req.query.purchaseItemId as string;

    const removeItemService = new RemoveItemPurchaseService();

    const orderPurchase = await removeItemService.execute({
      purchaseItemId,
    });

    return res.json(orderPurchase);
  }
}

export { RemoveItemPurchaseController };
