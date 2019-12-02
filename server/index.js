const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes/authRoutes");
const adminRoutes = require("./routes/adminRoutes/adminRoutes");
const cartRoutes = require("./routes/cartRoutes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes/orderRoutes");
const routes = require("./routes/routes");
const auth = require("./auth/auth");
const app = express();

app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb://localhost:27017/shopDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(_ => console.log("MongoDB Connected."))
  .catch(err => console.log(err));

app.use("/api", routes);
app.use("/auth", authRoutes);
app.use("/admin", auth.admin, adminRoutes);
app.use("/cart", auth.user, auth.decodeUser, cartRoutes);
app.use("/order", auth.user, auth.decodeUser, orderRoutes);

app.listen(4000, _ => {
  console.log("Server Running on Port 4000");
});
