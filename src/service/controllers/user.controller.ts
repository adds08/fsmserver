import { Request, Response, NextFunction } from "express";

import UserModel from "../../model/user.model";
import { User } from "../../model/interfaces";
import * as jwt from "jsonwebtoken";


export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let userdata: User = req.body;
        let result = await UserModel.create(userdata);
        return res.status(201).json({
            message:"Creation User Successful"
        });
    } catch (err) {
        return next(err);
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body);
        let result = await UserModel.auth(req.body.email,req.body.password);
        if(result.length<1){
            console.log(result);
            return next("Auth Failed")
        }
        const token = await jwt.sign({
            email:result[0].email,
            user_id:result[0].id,
        },
        "secretkey",
        {
            expiresIn:"1h"
        });
        return res.status(200).json({
            message:"Successful",
            token
        });
    } catch (err) {
        return next(err);
    }
}

export const logout = async (req: Request, res: Response, next: NextFunction) => {
    try {

    }
    catch (err) {

    }
}
export const pass_reset = async (req: Request, res: Response, next: NextFunction) => {

}