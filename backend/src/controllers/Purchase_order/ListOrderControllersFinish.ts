import { Request, Response } from "express";
import { ListOrderServiceFinish } from "../../services/order/ListOrderServiceFinish";

class ListOrderControllersFinish {
  async handle(req: Request, res: Response) {
    const listOrderServiceFinish = new ListOrderServiceFinish();

    const orders = await listOrderServiceFinish.execute();

    return res.json(orders);
  }
}

export { ListOrderControllersFinish };
