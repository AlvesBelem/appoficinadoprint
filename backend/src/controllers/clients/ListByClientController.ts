import { Request, Response } from "express";
import { ListByClientService } from "../../services/clients/ListByClientService";

class ListByClientController {
  async handle(req: Request, res: Response) {
    const clientId = req.query.clientId as string;

    const listByClient = new ListByClientService();

    const clients = await listByClient.execute();

    return res.json(clients);
  }
}

export { ListByClientController };
