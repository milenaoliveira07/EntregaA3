import { GenericRepository } from "./genericRepository.js";
export class ClientRepository extends GenericRepository {
  constructor(connection) {
    super(connection, "clients");
  }
}
