import express from "express";
import isAuth from "../middleware/isAuth";
import * as InvoiceController from "../controllers/InvoiceController";

const invoiceRoutes = express.Router();

invoiceRoutes.get("/invoices", isAuth, InvoiceController.index);
invoiceRoutes.get("/invoices/list", isAuth, InvoiceController.list);
invoiceRoutes.get("/invoices/:invoiceId", isAuth, InvoiceController.show);
invoiceRoutes.put("/invoices/:id", isAuth, InvoiceController.update);

export default invoiceRoutes;
