import { createClient, updateClient } from "../schemas/clientSchema.js";
import { ClientService } from "../services/clientService.js";
import { validateID } from "../utils/validateID.js";

const clientService = new ClientService();

class ClientController {
  async findAll(req, res) {
    try {
      const clients = await clientService.findAll();
      res.status(200).json(clients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id = validateID(req.params.id);

      const client = await clientService.findById(id);
      res.status(200).json(client);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { error, value } = createClient.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const client = await clientService.create(value);
      res.status(201).json(client);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { error, value } = updateClient.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const id = validateID(req.params.id);

      const client = await clientService.update(id, value);
      res.status(200).json(client);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = validateID(req.params.id);
      await clientService.delete(id);
      res.status(200).json({ message: "Client deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new ClientController();
