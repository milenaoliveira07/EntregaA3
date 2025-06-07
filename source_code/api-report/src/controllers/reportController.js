import reportService from "../services/reportService.js";
import { validateID } from "../util/validateID.js";

class ReportController {
  async findTopSellingProducts(req, res) {
    try {
      const reports = await reportService.findTopSellingProducts();
      res.status(200).json(reports);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to generate report: " + error.message });
    }
  }

  async findProductsByClient(req, res) {
    try {
      const clientId = validateID(req.params.id);
      const reports = await reportService.findProductsByClient(clientId);
      res.status(200).json(reports);
    } catch (error) {
      res
        .status(404)
        .json({ error: "Failed to generate report: " + error.message });
    }
  }

  async findAverageConsumptionByClient(req, res) {
    try {
      const reports = await reportService.findAverageConsumptionByClient();
      res.status(200).json(reports);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to generate report: " + error.message });
    }
  }

  async findLowStockProducts(req, res) {
    try {
      const reports = await reportService.findLowStockProducts();
      res.status(200).json(reports);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to generate report: " + error.message });
    }
  }
}

export default new ReportController();
