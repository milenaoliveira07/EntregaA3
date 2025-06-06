import db from "../config/database.js";
import { ProductRepository } from "../repositories/productRepository.js";

export class ProductService {
  constructor() {
    this.productRepository = new ProductRepository(db);
  }

  async findAll() {
    return await this.productRepository.findAll();
  }

  async findById(id) {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  async create(data) {
    return await this.productRepository.create(data);
  }

  async update(id, data) {
    const product = await this.findById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return await this.productRepository.update(id, data);
  }

  async delete(id) {
    const product = await this.findById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return await this.productRepository.delete(id);
  }

  async findByOne(field, value) {
    const product = await this.productRepository.findByOne(field, value);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }
}
