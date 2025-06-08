import { createSale, updateSale } from "../schemas/saleSchema.js";
import { SaleService } from "../services/saleService.js";
import { validateID } from "../utils/validateID.js";

const saleService = new SaleService();

class SaleController {
  async findAll(req, res) {
    try {
      const sales = await saleService.findAll();
      return res.status(200).json(sales);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id = validateID(req.params.id);
      const sale = await saleService.findById(id);
      if (!sale) {
        return res.status(404).json({ error: "Sale not found" });
      }
      res.status(200).json(sale);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { error, value } = createSale.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const sale = await saleService.create(value);
      res.status(201).json(sale);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const id = validateID(req.params.id);
      const { error, value } = updateSale.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const sale = await saleService.update(id, value);
      if (!sale) {
        return res.status(404).json({ error: "Sale not found" });
      }
      res.status(200).json(sale);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = validateID(req.params.id);
      const deleted = await saleService.delete(id);
      if (!deleted) {
        return res.status(404).json({ error: "Sale not found" });
      }
      res.status(200).json({ message: "Sale deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async cancel(req, res) {
    try {
      const id = validateID(req.params.id);
      const sale = await saleService.cancel(id);
      res.status(200).json(sale);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new SaleController();
