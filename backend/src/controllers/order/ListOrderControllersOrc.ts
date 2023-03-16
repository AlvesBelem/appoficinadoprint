import { Request, Response } from "express";
import { ListOrderServiceOrc } from "../../services/order/ListOrderServiceOrc";

class ListOrderControllersOrc {
  async handle(req: Request, res: Response) {
    const listOrderServiceOrc = new ListOrderServiceOrc();

    const orders = await listOrderServiceOrc.execute();

    return res.json(orders);
  }
}

export { ListOrderControllersOrc };
