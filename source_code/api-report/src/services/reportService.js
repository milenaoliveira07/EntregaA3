import reportRepository from "../repositories/reportRepository.js";

class ReportService {
  async findTopSellingProducts() {
    return await reportRepository.findTopSellingProducts();
  }

  async findProductsByClient(clientId) {
    const products = await reportRepository.findProductsByClient(clientId);
    if (products.length === 0) {
      throw new Error(
        "No products found for this client or client does not exist."
      );
    }
    return products;
  }

  async findAverageConsumptionByClient() {
    return await reportRepository.findAverageConsumptionByClient();
  }

  async findLowStockProducts() {
    return await reportRepository.findLowStockProducts();
  }
}

export default new ReportService();
