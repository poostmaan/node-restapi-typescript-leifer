// Los servicios seran los encargados de tocar la logica del negocio

import { Car } from "../interfaces";
import { ItemModel } from "../models";

const insertCar = async (item: Car) => {
  const insertedItem = await ItemModel.create(item);
  return insertedItem;
};

const getCars = async () => {
  const response = await ItemModel.find({});
  return response;
};

const getCar = async (id: string) => {
  const response = await ItemModel.findById({ _id: id });
  return response;
};

const putCar = async (id: string, item: Car) => {
  const response = await ItemModel.findByIdAndUpdate(
    { _id: id },
    item,
    { new: true } // Retornara el objecto antes de que sufriese la actualizacion
  );
  return response;
};

const deleteCar = async (id: string) => {
  const response = await ItemModel.findByIdAndDelete({ _id: id });
  return response;
};



export { insertCar, getCars, getCar, putCar, deleteCar };
