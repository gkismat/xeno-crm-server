import Shop from "../model/shop-schema";
import Customer from "../model/customer-schema";
import Order from "../model/order-schema";

// ==================== Add Shop ====================
export const addShop = async (req: any, res: any) => {
  try {
    const { email, name, description } = req.body;

    if (!email || !name) {
      return res.status(400).json({ message: "Email and Name are required" });
    }

    const newShop = new Shop({ email, name, description });
    const savedShop = await newShop.save();

    res.status(201).json({
      message: "Shop added successfully",
      shop: {
        email: savedShop.email,
        name: savedShop.name,
        description: savedShop.description,
      },
    });
  } catch (error: any) {
    console.error("Error adding shop:", error.message);
    res.status(500).json({
      message: "Error adding shop",
      error: error.message, // 🔎 send back actual reason
    });
  }
};

// ==================== Get Shop Data ====================
export const getShopData = async (req: any, res: any) => {
  try {
    const { email } = req.body;
    const shopDetails = await Shop.find({ email });

    if (shopDetails && shopDetails.length > 0) {
      res.status(200).json(shopDetails);
    } else {
      res.status(404).json({ message: "No shops found" });
    }
  } catch (error: any) {
    console.error("Error fetching shop data:", error.message);
    res.status(500).json({ message: "Error fetching shop data", error: error.message });
  }
};

// ==================== Get Customer Data ====================
export const getCustData = async (req: any, res: any) => {
  try {
    const { shopName } = req.body;
    const customers = await Customer.find({ shopName });

    if (customers && customers.length > 0) {
      res.status(200).json(customers);
    } else {
      res.status(404).json({ message: "No customers found" });
    }
  } catch (error: any) {
    console.error("Error fetching customers:", error.message);
    res.status(500).json({ message: "Error fetching customers", error: error.message });
  }
};

// ==================== Get Order Data ====================
export const getAllOrderData = async (req: any, res: any) => {
  try {
    const { shopName } = req.body;
    const orders = await Order.find({ shopName });

    if (orders && orders.length > 0) {
      res.status(200).json(orders);
    } else {
      res.status(404).json({ message: "No orders found" });
    }
  } catch (error: any) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
};
