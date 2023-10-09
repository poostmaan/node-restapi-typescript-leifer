import { Request, Response } from "express";
import { errorHttpHandler } from "../utils/error.handler";
const getItem = (req: Request, res: Response) => {
    try {
        res.send("de")
    } catch (error) {
        errorHttpHandler(res, error)
    }
}
const postItem = (req: Request, res: Response) => {
    try {
        res.send("de")
    } catch (error) {
        errorHttpHandler(res, error)
    }
}
const putItem = (req: Request, res: Response) => {
    try {
        res.send("de")
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
const deleteItem = (req: Request, res: Response) => {
    try {
        res.send("de")
    } catch (error) {
        errorHttpHandler(res, error)
    }
}
export {getItem, postItem, putItem, patchItem, deleteItem}
