import { ProductService } from "../services/productService.js";
import { createProduct, updateProduct } from "../schemas/productShema.js";
import { validateID } from "../utils/validateID.js";

const productService = new ProductService();

class ProductController {
  async findAll(req, res) {
    try {
      const products = await productService.findAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id = validateID(req.params.id);

      const product = await productService.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { error, value } = createProduct.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const newProduct = await productService.create(value);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const id = validateID(req.params.id);
      const { error, value } = updateProduct.validate(req.body);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      const updatedProduct = await productService.update(id, value);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = validateID(req.params.id);

      await productService.delete(id);
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new ProductController();
