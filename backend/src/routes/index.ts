import { Router } from "express";

import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import companyRoutes from "./companyRoutes";
import planRoutes from "./planRoutes";

const routes = Router();

routes.use(userRoutes);
routes.use("/auth", authRoutes);
routes.use(companyRoutes);
routes.use(planRoutes);


export default routes;
