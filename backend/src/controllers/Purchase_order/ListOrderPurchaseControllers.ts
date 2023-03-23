import { Request, Response } from "express";
import { ListOrderPurchaseService } from "../../services/Purchase_order/ListOrderPurchaseService";

class ListOrderPurchaseControllers {
  async handle(req: Request, res: Response) {
    const listOrderPurchaseService = new ListOrderPurchaseService();

    const ordersPurchases = await listOrderPurchaseService.execute();

    return res.json(ordersPurchases);
  }
}

export { ListOrderPurchaseControllers };
