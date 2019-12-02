const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  customerId: {
    type: String,
    required: true
  },
  products: { type: Array, default: [] },
  issuedAt: {
    type: Date,
    default: Date
  },
  isActive: {
    type: Boolean,
    default: true
  }
});
module.exports = mongoose.model("carts", cartSchema);
