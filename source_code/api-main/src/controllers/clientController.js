import { ClientService } from "../services/clientService.js";

const clientService = new ClientService();
class ClientController {
  async findAll(req, res) {
    try {
      const clients = await clientService.findAll();
      return res.status(200).json({ data: clients });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new ClientController();
