import { Router } from "express";

import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import companyRoutes from "./companyRoutes";
import planRoutes from "./planRoutes";
import invoiceRoutes from "./invoiceRoutes";

const routes = Router();

routes.use(userRoutes);
routes.use("/auth", authRoutes);
routes.use(companyRoutes);
routes.use(planRoutes);
routes.use(invoiceRoutes);


export default routes;
