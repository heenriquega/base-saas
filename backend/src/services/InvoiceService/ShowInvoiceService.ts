import Invoice from "../../models/Invoice";
import AppError from "../../errors/AppError";

const ShowInvoiceService = async (
  invoiceId: string | number
): Promise<Invoice> => {
  const invoice = await Invoice.findByPk(invoiceId);

  if (!invoice) {
    throw new AppError("ERR_NO_INVOICE_FOUND", 404);
  }

  return invoice;
};

export default ShowInvoiceService;
