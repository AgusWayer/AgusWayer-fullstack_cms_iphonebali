import mongoose from "mongoose";

const labelSchema = mongoose.Schema({
  label: {
    type: String,
  },
});

export const Label = mongoose.model("label", labelSchema);
