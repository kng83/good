import { Request, Response } from 'express'
export namespace mainRouteDriver {

    /*
    * Send response of index.html
    */
   export const indexPage = (req: Request, res: Response) => {
        res.sendFile('index.html', {
            root: __dirname
        });
    }
}