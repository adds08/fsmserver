import { Request, Response, NextFunction } from "express";

import * as jwt from "jsonwebtoken";

export const verifyToken = (role: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log(role);
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1]
            jwt.verify(token, 'secretkey', function (err: any, payload: any) {
                if (err) {
                    return res.status(403).json({
                        message: err
                    });
                }
                if (payload) {
                    console.log(payload);
                    return next();
                }
                return res.status(403).json({
                    message: "Unauthorized"
                });
            });
        } else {
            return res.status(403);
        }
    }
}
