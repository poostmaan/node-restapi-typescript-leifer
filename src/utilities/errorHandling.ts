import { Application, Request, Response } from "express";
import logger from "./logger";
import { IS_PRODUCTION } from "./envVariables";

export function loadErrorHandling(app: Application) {

    app.use((req: Request, res: Response, next) => {

        interface BetterError extends Error {
            status?: number
            urlRequested?: string
        }

        const err: BetterError = new Error('Not found');
        err.status = 404;
        err.urlRequested = req.url;
        next(err);

    });

    app.use((err: any, req: Request, res: Response, next: any) => {
        logger.error(err);

        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
                errorCode: IS_PRODUCTION ? err : {}
            }
        })
    })

}