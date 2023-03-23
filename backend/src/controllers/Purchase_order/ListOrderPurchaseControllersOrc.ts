import { Request, Response } from "express";
import { ListOrderPurchaseServiceOrc } from "../../services/Purchase_order/ListOrderPurchaseServiceOrc";

class ListOrderPurchaseControllersOrc {
  async handle(req: Request, res: Response) {
    const listOrderPurchaseServiceOrc = new ListOrderPurchaseServiceOrc();

    const ordersPurchases = await listOrderPurchaseServiceOrc.execute();

    return res.json(ordersPurchases);
  }
}

export { ListOrderPurchaseControllersOrc };
