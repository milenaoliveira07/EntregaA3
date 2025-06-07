import db from "../config/database.js";

class ReportRepository {
  constructor() {
    this.connection = db;
  }

  async findTopSellingProducts() {
    const query = `
      SELECT 
        products.id,
        products.name,
        products.description,
        products.price,
        products.category,
        SUM(sale_items.quantity_purchased) AS total_sold
      FROM products
      JOIN sale_items ON products.id = sale_items.product_id
      GROUP BY products.id
      ORDER BY total_sold DESC;
    `;
    const [rows] = await this.connection.query(query);
    return rows;
  }

  async findProductsByClient(clientId) {
    const query = `
      SELECT 
        clients.full_name AS client_name,
        products.name AS product_name,
        sale_items.quantity_purchased,
        sale_items.unit_price_sale,
        sales.sale_date
      FROM sales
      JOIN clients ON sales.client_id = clients.id
      JOIN sale_items ON sales.id = sale_items.sale_id
      JOIN products ON sale_items.product_id = products.id
      WHERE sales.client_id = ?;
    `;
    const [rows] = await this.connection.query(query, [clientId]);
    return rows;
  }

  async findAverageConsumptionByClient() {
    const query = `
      SELECT
        clients.id AS client_id,
        clients.full_name,
        AVG(client_sales.total_sale_value) AS average_consumption
      FROM clients
      JOIN (
        SELECT 
          sales.client_id,
          SUM(sale_items.quantity_purchased * sale_items.unit_price_sale) AS total_sale_value
        FROM sales
        JOIN sale_items ON sales.id = sale_items.sale_id
        WHERE sales.status = 'Completed'
        GROUP BY sales.id
      ) AS client_sales ON clients.id = client_sales.client_id
      GROUP BY clients.id;
    `;
    const [rows] = await this.connection.query(query);
    return rows;
  }

  async findLowStockProducts() {
    const query = `
      SELECT 
        *
      FROM products
      WHERE stock_quantity <= low_stock;
    `;
    const [rows] = await this.connection.query(query);
    return rows;
  }
}

export default new ReportRepository();
