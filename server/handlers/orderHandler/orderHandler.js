const Orders = require("../../models/orders.model");
const Cart = require("../../models/cart.model");
//TODO : Date Issue .
const getDateForShipping = (req, res) => {
  let shippingDate = req.body.shippingDate;
  Orders.find({ issuedAt: shippingDate }, (err, result) => {
    if (err) {
      res.json({
        message: "There is an Error , Contact the Admin : " + err
      });
    } else if (result.length === 2) {
      res.json({
        status: "error",
        message:
          "in this date there is 3 orders today , please select other date."
      });
    }
    res.json(result);
    // res.json({
    //   status: "success",
    //   message:
    //     "This date is good for delivery ! , the remaining orders is  " +
    //     result.length
    // });
  });
};

//TODO Aggregate and replace
const createOrder = (req, res) => {
  Cart.findOne(
    { customerId: req.decodedUser.username, isActive: true },
    { _id: 1 },
    (err, result) => {
      if (err) {
        res.json({
          message: "There is an Error , Contact the Admin : " + err
        });
      }
      // ! assign this result to  the cartId identify
    }
  );

  Orders.aggregate([
    {
      $lookup: {
        from: "carts",
        localField: req.decodedUser.username,
        foreignField: req.decodedUser.username,
        as: "cart"
      }
    }
  ]).exec(async (err, result) => {
    if (err) {
      await res.json({
        message: "There is an Error , Contact the Admin : " + err
      });
    }
    await res.json(result);
  });
};
module.exports = {
  getDateForShipping,
  createOrder
};
