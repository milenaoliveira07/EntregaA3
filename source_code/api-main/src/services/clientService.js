import db from "../config/database.js";
import { ClientRepository } from "../repositories/clientRepository.js";

export class ClientService {
  constructor() {
    this.clientRepository = new ClientRepository(db);
  }

  async findAll() {
    return await this.clientRepository.findAll();
  }
}
