import db from "../config/database.js";
import { SaleRepository } from "../repositories/saleRepository.js";

export class SaleService {
  constructor() {
    this.saleRepository = new SaleRepository(db);
  }

  async findAll() {
    return await this.saleRepository.findAll();
  }

  async findById(id) {
    const sale = await this.saleRepository.findById(id);
    if (!sale) return null;
    return sale;
  }

  async create(data) {
    return await this.saleRepository.create(data);
  }

  async update(id, data) {
    const sale = await this.findById(id);
    if (!sale) return null;
    return await this.saleRepository.update(id, data);
  }

  async delete(id) {
    const sale = await this.findById(id);
    if (!sale) return null;
    return await this.saleRepository.delete(id);
  }
}

export default new SaleService();