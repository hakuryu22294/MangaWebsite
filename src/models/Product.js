import mongoose from "mongoose";
const reViewsSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    rating: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 5,
    },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    part: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Type",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    reviews: [reViewsSchema],
    numReviews: { type: Number, default: 0 },
    countInStock: { type: Number, required: true },
  },
  { timestamps: true }
);
export default mongoose.model("Product", productSchema);
