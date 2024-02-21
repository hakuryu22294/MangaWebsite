import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    total_amount: { type: Number, required: true },
    payment_method: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model("Order", orderSchema);
