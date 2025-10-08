// import { Injectable,NestMiddleware } from "@nestjs/common";
// import { Request,Response,NextFunction } from "express";

// @Injectable()
// export class CatMiddleware implements NestMiddleware {
//     use(req: any, res: any, next: (error?: any) => void) {
//         console.log('This is me the middleware running before you.')
//         next();
//     }
// }


import {Request,Response, NextFunction} from "express";

export function CatMiddleware (req: Request, res : Response, next: NextFunction){
    console.log("This is me the function based middleware");
    next();
}