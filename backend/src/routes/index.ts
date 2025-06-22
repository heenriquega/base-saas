import { Router } from "express";

import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import companyRoutes from "./companyRoutes";

const routes = Router();

routes.use(userRoutes);
routes.use("/auth", authRoutes);
routes.use(companyRoutes);


export default routes;
