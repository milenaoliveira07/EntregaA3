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
    const existingEmail = await this.clientRepository.findByOne(
      "email",
      data.email
    );
    if (existingEmail) {
      throw new Error("Client with this email already exists");
    }

    const existingPhone = await this.clientRepository.findByOne(
      "phone",
      data.phone
    );

    if (existingPhone) {
      throw new Error("Client with this phone number already exists");
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

  async findByOne(field, value) {
    const client = await this.clientRepository.findByOne(field, value);
    if (!client) {
      throw new Error("Client not found");
    }
    return client;
  }
}
