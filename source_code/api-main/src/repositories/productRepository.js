import { GenericRepository } from "./genericRepository.js";

export class ProductRepository extends GenericRepository {
  constructor(connection) {
    super(connection, "products");
  }
}
