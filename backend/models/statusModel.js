import mongoose from "mongoose";

const statusSchema = mongoose.Schema({
  status: {
    type: String,
  },
});

export const Status = mongoose.model("status", statusSchema);
