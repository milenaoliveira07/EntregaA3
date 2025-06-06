import { createSeller, updateSeller } from "../schemas/sellerSchema.js";
import { SellerService } from "../services/sellerService.js";

const sellerService = new SellerService();
class SellerController {
  async findAll(req, res) {
    try {
      const sellers = await sellerService.findAll();
      return res.status(200).json(sellers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id = validateID(req.params.id);

      const seller = await sellerService.findById(id);
      res.status(200).json(seller);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { error, value } = createSeller.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const seller = await sellerService.create(value);
      res.status(200).json(seller);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const id = validateID(req.params.id);

      const { error, value } = updateSeller.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const seller = await sellerService.update(id, value);
      res.status(200).json(seller);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = validateID(req.params.id);

      await sellerService.delete(id);
      res.status(200).json({ message: "Seller deleted successfully" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new SellerController();
