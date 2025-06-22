import Invoice from "../../models/Invoice";

const FindAllInvoiceService = async (companyId: number): Promise<Invoice[]> => {
  const invoice = await Invoice.findAll({
    where: { companyId },
    order: [["id", "ASC"]]
  });
  return invoice;
};

export default FindAllInvoiceService;
