import { GenericRepository } from "./genericRepository.js";
import { dbConnection } from "../config/database.js";

export class SaleRepository extends GenericRepository {
  constructor() {
    super(dbConnection, "sales");
  }

  async findByCustomerId(customerId) {
    return this.findByOne("customer_id", customerId);
  }
}