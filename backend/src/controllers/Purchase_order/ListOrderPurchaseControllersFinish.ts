import { Request, Response } from "express";
import { ListOrderPurchaseServiceFinish } from "../../services/Purchase_order/ListOrderPurchaseServiceFinish";

class ListOrderPurchaseControllersFinish {
  async handle(req: Request, res: Response) {
    const listOrderPurchaseServiceFinish = new ListOrderPurchaseServiceFinish();

    const ordersPurchases = await listOrderPurchaseServiceFinish.execute();

    return res.json(ordersPurchases);
  }
}

export { ListOrderPurchaseControllersFinish };
