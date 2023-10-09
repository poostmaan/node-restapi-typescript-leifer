import { Schema, model } from "mongoose";
import { Car } from "../interfaces";

const ItemSchema = new Schema<Car>(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    serial_numer: { type: Number, required: true },
    color: { type: String },
    gas: { type: String, enum: ["gasoline", "electric"] },
    year: { type: Number, required: true },
    description: { type: String },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("item", ItemSchema);
export default ItemModel;
