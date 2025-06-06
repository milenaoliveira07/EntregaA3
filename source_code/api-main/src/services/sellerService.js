import db from "../config/database.js";
import { SellerRepository } from "../repositories/sellerRepository.js";

export class SellerService {
  constructor() {
    this.sellerRepository = new SellerRepository(db);
  }

  async findAll() {
    return await this.sellerRepository.findAll();
  }

  async findById(id) {
    const seller = await this.sellerRepository.findById(id);
    if (!seller) {
      throw new Error("Seller not found");
    }
    return seller;
  }

  async create(data) {
    return await this.sellerRepository.create(data);
  }

  async update(id, data) {
    const seller = await this.findById(id);
    if (!seller) {
      throw new Error("Seller not found");
    }
    return await this.sellerRepository.update(id, data);
  }

  async delete(id) {
    const seller = await this.findById(id);
    if (!seller) {
      throw new Error("Seller not found");
    }
    return await this.sellerRepository.delete(id);
  }

  async findByOne(field, value) {
    const seller = await this.sellerRepository.findByOne(field, value);
    if (!seller) {
      throw new Error("Seller not found");
    }
    return seller;
  }
}
