import express from "express";
import {
  addShop,
  getAllOrderData,
  getCustData,
  getShopData,
} from "../controller/shop-controller";
import Order from "../model/order-schema";
import Customer from "../model/customer-schema";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// ==================== Shop Routes ====================
router.post("/addshop", addShop);
router.post("/getshopdata", getShopData);
router.post("/getAllOrderData", getAllOrderData);
router.post("/getAllCustomerData", getCustData);

// ==================== Customer Route ====================
router.post("/customer", async (req, res) => {
  const { custName, custEmail, spends, visits, lastVisits, shopName } = req.body;

  const customer = new Customer({
    custName,
    custEmail,
    spends,
    visits,
    lastVisits,
    shopName,
  });

  try {
    await customer.save();
    res.status(201).send("Customer submitted and saved to DB");
  } catch (error) {
    console.error("Error submitting customer:", error);
    res.status(500).send("Error submitting customer");
  }
});

// ==================== Order Route ====================
router.post("/order", async (req, res) => {
  const { orderName, orderEmail, amount, orderDate, shopName } = req.body;

  const order = new Order({
    orderName,
    orderEmail,
    amount,
    orderDate,
    shopName,
  });

  try {
    await order.save();
    res.status(201).send("Order submitted and saved to DB");
  } catch (error) {
    console.error("Error submitting order:", error);
    res.status(500).send("Error submitting order");
  }
});

export default router;
