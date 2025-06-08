import connection from "../config/database.js";
import { SaleRepository } from "../repositories/saleRepository.js";
import { ClientService } from "./clientService.js";
import { SellerService } from "./sellerService.js";

export class SaleService {
  constructor() {
    this.saleRepository = new SaleRepository(connection);
    this.clientService = new ClientService();
    this.sellerService = new SellerService();
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
    if (!(await clientService.findById(data.client_id))) {
      throw new Error("Client not found");
    }

    if (!(await sellerService.findById(data.seller_id))) {
      throw new Error("Seller not found");
    }

    for (const item of data.items) {
      const [productRows] = await connection.query(
        "SELECT stock_quantity, name FROM products WHERE id = ?;",
        [item.product_id]
      );
      const product = productRows[0];

      if (!product) {
        throw new Error(`Product with ID ${item.product_id} not found`);
      }

      if (product.stock_quantity < item.quantity_purchased) {
        throw new Error(
          `Insufficient stock for the product: ${
            product.name || "ID " + item.product_id
          }`
        );
      }
    }

    const saleResult = await connection.query(
      "INSERT INTO sales (client_id, seller_id) VALUES (?, ?);",
      [data.client_id, data.seller_id]
    );

    const saleId = saleResult[0].insertId;

    for (const item of data.items) {
      const [product] = await connection.query(
        "SELECT price FROM products WHERE id = ?;",
        [item.product_id]
      );
      await connection.query(
        "INSERT INTO sale_items (sale_id, product_id, quantity_purchased, unit_price_sale) VALUES (?, ?, ?, ?);",
        [saleId, item.product_id, item.quantity_purchased, product[0].price]
      );

      await connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?;",
        [item.quantity_purchased, item.product_id]
      );
    }

    return { id: saleId, ...data };
  }

  async update(id, data) {
    try {
      const sale = await this.saleRepository.findById(id);
      if (!sale) {
        throw new Error("Sale not found");
      }

      if (data.status === "Cancelled" && sale.status !== "Cancelled") {
        const [items] = await connection.query(
          "SELECT product_id, quantity_purchased FROM sale_items WHERE sale_id = ?",
          [id]
        );

        for (const item of items) {
          await connection.query(
            "UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?",
            [item.quantity_purchased, item.product_id]
          );
        }
      }

      const updatedSale = await this.saleRepository.update(id, data);
      return updatedSale;
    } catch (error) {
      throw new Error(`Failed to update sale: ${error.message}`);
    }
  }

  async cancel(id) {
    const sale = await this.findById(id);
    if (!sale) {
      throw new Error("Sale not found");
    }

    if (sale.status === "Cancelled") {
      throw new Error("Sale already cancelled");
    }

    return await this.update(id, { status: "Cancelled" });
  }

  async delete(id) {
    const sale = await this.findById(id);
    if (!sale) return null;
    return await this.saleRepository.delete(id);
  }
}

export default new SaleService();
