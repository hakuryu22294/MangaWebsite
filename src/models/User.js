import mongoose from "mongoose";

const ROLE = ["admin", "member"];

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ROLE, default: "member" },
  avatar: {
    type: String,
  },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cart" }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

export default mongoose.model("User", userSchema);
