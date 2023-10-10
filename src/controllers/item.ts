import { Request, Response } from "express";
import { errorHttpHandler } from "../utils/error.handler";
import { deleteCar, getCar, getCars, insertCar, putCar } from "../services";
import { Car } from "../interfaces";
import { httpRespond } from "../utils";

const getItem = async(req: Request, res: Response) => {
    try {

        const { id } = req.params

        const car = await getCar(id);
        httpRespond(res, 200, { ok: true, message: "query executed successfully", data: car})

    } catch (error) {
        errorHttpHandler(res, error)
    }
}
const getItems = async(req: Request, res: Response) => {
    try {

        const cars = await getCars();
        httpRespond(res, 200, { ok: true, message: "query executed successfully", data: cars})

    } catch (error) {
        errorHttpHandler(res, error)
    }
}
const postItem = async(req: Request, res: Response) => {
    try {

        const body: Car = req.body;

        const insertedItem = await insertCar(body);
        console.log(insertedItem)

        httpRespond(res, 201, { ok: true, message: "item created", data: insertedItem});
    } catch (error) {
        errorHttpHandler(res, error)
    }
}
const putItem = async (req: Request, res: Response) => {
    try {

        const body: Car = req.body;
        const { id } = req.params;

        const updatedItem = await putCar(id, body);

        httpRespond(res, 201, { ok: true, message: "item created", data: updatedItem});
    } catch (error) {
        errorHttpHandler(res, error)
    }
}
const patchItem = (req: Request, res: Response) => {
    try {
        res.send("de")
    } catch (error) {
        errorHttpHandler(res, error)
    }
}
const deleteItem = async(req: Request, res: Response) => {
    try {
        const { id } = req.params

        const deleted = await deleteCar(id);

        if(!deleted) {
            httpRespond(res, 404, { ok: false, message: "nothing to delete"})
        }

        httpRespond(res, 204, { ok: true, message: "query executed successfully"})

    } catch (error) {
        errorHttpHandler(res, error)
    }
}
export {getItem, postItem, putItem, patchItem, deleteItem, getItems}
