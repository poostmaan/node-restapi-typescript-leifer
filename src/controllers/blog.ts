import { Request, Response } from "express";
const getBlog = (req: Request, res: Response) => {
    try {
        res.send("blog")
    } catch (error) {
        res.status(500).json({ ok: false, error })
    }
}
const postBlog = (req: Request, res: Response) => {
    try {
        res.send("blog")

    } catch (error) {
        res.status(500).json({ ok: false, error })
    }
}
const putBlog = (req: Request, res: Response) => {
    try {
        res.send("blog")

    } catch (error) {
        res.status(500).json({ ok: false, error })
    }
}
const patchBlog = (req: Request, res: Response) => {
    try {
        res.send("blog")

    } catch (error) {
        res.status(500).json({ ok: false, error })
    }
}
const deleteBlog = (req: Request, res: Response) => {
    try {
        res.send("blog")

    } catch (error) {
        res.status(500).json({ ok: false, error })
    }
}
export {getBlog, postBlog, putBlog, patchBlog, deleteBlog}