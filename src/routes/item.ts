import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response): void => {
    res.json({ ok: false });
});

export { router }