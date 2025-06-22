import AppError from "../../errors/AppError";
import Invoice from "../../models/Invoice";

interface InvoiceData {
  status: string;
  id?: number | string;
}

const UpdateInvoiceService = async (
  invoiceData: InvoiceData
): Promise<Invoice> => {
  const { id, status } = invoiceData;

  const invoice = await Invoice.findByPk(id);

  if (!invoice) {
    throw new AppError("ERR_NO_INVOICE_FOUND", 404);
  }

  await invoice.update({ status });

  return invoice;
};

export default UpdateInvoiceService;
