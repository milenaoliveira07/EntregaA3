import { GenericRepository } from "./genericRepository.js";
export class SaleRepository extends GenericRepository {
  constructor(connection) {
    super(connection, "sales");
  }
}
