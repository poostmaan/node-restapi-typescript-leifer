import { Response } from "express"

const errorHttpHandler = (res: Response, error: any) => { 
    res.status(500).json({ ok: false, error })
}

export { errorHttpHandler }