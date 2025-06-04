import { GenericRepository } from "./genericRepository.js";

export class SellerRepository extends GenericRepository {
    constructor(connection) {
        super(connection, "sellers");
    }
}