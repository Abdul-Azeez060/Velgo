const Driver = require("./Driver");

const mongoose = require("mongoose");
main()
  .then(() => console.log("successfull connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/BikePool");
}

const BookedOrderSchema = new mongoose.Schema({
  //creating schema, template, rules for the db
  name: {
    type: String,
    included: true,
  },
  price: {
    type: Number,
    included: true,
  },
  pickUp: {
    type: String,
    included: true,
  },
  dropIn: {
    type: String,
    included: true,
  },

  time: {
    type: String,
    included: true,
  },
  isBooked: {
    type: Boolean,
  },
  driverData: { type: mongoose.Schema.Types.ObjectId, ref: "Driver" },
  userData: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const BookedOrder = mongoose.model("BookedOrder", BookedOrderSchema); // Order is the model (class) which u have to make instances

module.exports = BookedOrder;