import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export const Product = mongoose.model("product", productSchema);
