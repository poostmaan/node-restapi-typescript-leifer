// Los servicios seran los encargados de tocar la logica del negocio

import { Car } from "../interfaces";
import { ItemModel }from "../models";

const insertItem = async (item: Car) => {
  console.log(item);
  const insertedItem = await ItemModel.create(item);
  return insertedItem;
};

export { insertItem };
