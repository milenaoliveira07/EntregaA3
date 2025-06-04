 import { SellerService } from "../services/sellerService.js";

 const sellerService = new SellerService();
 class SellerController {
    async findAll(req, res) {
        try {
            const sellers = await sellerService.findAll();    
            return res.status(200).json({ sellers: sellers });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id = req.params.id;
            const seller = await sellerService.findById(id);
            res.status(200).json({ seller: seller });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const data = req.body;
            const seller = await sellerService.create(data);
            res.status(200).json({ seller: seller });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const seller = await sellerService.update(id, data);
            res.status(200).json({ seller: seller });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const seller = await sellerService.delete(id);
            res.status(200).json({ message: "Seller deleted successfully" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
 }

 export default new SellerController();