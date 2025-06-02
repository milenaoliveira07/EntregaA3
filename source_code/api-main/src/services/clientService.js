import db from "../config/database.js";
import { ClientRepository } from "../repositories/clientRepository.js";

export class ClientService {
  constructor() {
    this.clientRepository = new ClientRepository(db);
  }

  async findAll() {
    return await this.clientRepository.findAll();
  }

  async findById(id) {
    const client = await this.clientRepository.findById(id);
    if (!client) {
      throw new Error("Client not found");
    }
    return client;
  }

  async create(data) {
    const { full_name, email, phone } = data;
    if (!full_name || !email || !phone) {
      throw new Error("Full name, email, and phone are required");
    }

    return await this.clientRepository.create(data);
  }
  

  async update(id, data) {
    const client = await this.findById(id);
    if (!client) {
      throw new Error("Client not found");
    }
    return await this.clientRepository.update(id, data);
  }

  async delete(id) {
    const client = await this.findById(id);
    if (!client) {
      throw new Error("Client not found");
    }
    return await this.clientRepository.delete(id);
  }
}
