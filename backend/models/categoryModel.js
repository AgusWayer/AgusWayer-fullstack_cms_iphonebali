import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  category: {
    type: String,
  },
});

export const Category = mongoose.model("category", categorySchema);
