import * as express from "express";

import * as AdminController from "../controllers/admin.controller";
import * as AuthService from "../services/auth.service";

const router = express.Router();

router
    .get('/profile',AuthService.verifyToken("admin"), AdminController.profile)

export default router;