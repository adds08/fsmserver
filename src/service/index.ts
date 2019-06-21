import * as express from "express";

import * as UserService from "./controllers/user.controller";
import * as AdminService from "./services/admin.service";
const router = express.Router();

router
    .use('/admin', AdminService.default)
    .post('/login', UserService.login)
    .post('/register', UserService.register)
export default router;