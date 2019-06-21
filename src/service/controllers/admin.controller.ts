import { Request, Response, NextFunction } from "express";

import UserModel from "../../model/user.model";
import { User } from "../../model/interfaces";


export const profile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let result = await UserModel.findAll();
        return res.status(201).json({
            result
        });
    } catch (err) {
        return next(err);
    }
}