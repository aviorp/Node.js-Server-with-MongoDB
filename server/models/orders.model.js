const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  customerId: String,
  issuedAt: { type: Date, default: new Date() },
  cart: { type: Array, required: true },
  finalPrice: { type: Number, required: true },
  shippingCity: { type: String, required: true },
  shippingAddress: String,
  shippingDate: Date,
  lastFourDigits: { type: Number, max: 4, required: true }
});

module.exports = mongoose.model("orders", orderSchema);
