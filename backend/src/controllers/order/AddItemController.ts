import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
  async handle(req: Request, res: Response) {
    const { orderId, productId, amount, clientId, serviceId } = req.body;

    const addItem = new AddItemService();

    const order = await addItem.execute({
      orderId,
      productId,
      clientId,
      serviceId,
      amount,
    });

    return res.json(order);
  }
}

export { AddItemController };
