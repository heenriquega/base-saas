import * as Yup from "yup";
import { Request, Response } from "express";
import AppError from "../errors/AppError";
import Invoice from "../models/Invoice";

import ListInvoicesService from "../services/InvoiceService/ListInvoicesService";
import FindAllInvoiceService from "../services/InvoiceService/FindAllInvoiceService";
import ShowInvoiceService from "../services/InvoiceService/ShowInvoiceService";
import UpdateInvoiceService from "../services/InvoiceService/UpdateInvoiceService";

interface IndexQuery {
  searchParam: string;
  pageNumber: string;
}

interface UpdateInvoiceData {
  status: string;
  id?: string;
}

export const index = async (req: Request, res: Response): Promise<Response> => {
  const { searchParam, pageNumber } = req.query as unknown as IndexQuery;

  const { invoices, count, hasMore } = await ListInvoicesService({
    searchParam,
    pageNumber
  });

  return res.json({ invoices, count, hasMore });
};

export const show = async (req: Request, res: Response): Promise<Response> => {
  const { invoiceId } = req.params as { invoiceId: string };

  const invoice = await ShowInvoiceService(invoiceId);

  return res.status(200).json(invoice);
};

export const list = async (req: Request, res: Response): Promise<Response> => {
  const { companyId } = req.user;
  const invoices: Invoice[] = await FindAllInvoiceService(companyId);

  return res.status(200).json(invoices);
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const invoiceData: UpdateInvoiceData = req.body;

  const schema = Yup.object().shape({
    status: Yup.string().required()
  });

  try {
    await schema.validate(invoiceData);
  } catch (err) {
    throw new AppError(err.message);
  }

  const { id, status } = invoiceData;

  const invoice = await UpdateInvoiceService({
    id,
    status
  });

  return res.status(200).json(invoice);
};
