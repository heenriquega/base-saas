import { Sequelize, Op } from "sequelize";
import Invoice from "../../models/Invoice";

interface Request {
  searchParam?: string;
  pageNumber?: string;
}

interface Response {
  invoices: Invoice[];
  count: number;
  hasMore: boolean;
}

const ListInvoicesService = async ({
  searchParam = "",
  pageNumber = "1"
}: Request): Promise<Response> => {
  const whereCondition = {
    [Op.or]: [
      {
        name: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("detail")),
          "LIKE",
          `%${searchParam.toLowerCase().trim()}%`
        )
      }
    ]
  };
  const limit = 20;
  const offset = limit * (+pageNumber - 1);

  const { count, rows: invoices } = await Invoice.findAndCountAll({
    where: whereCondition,
    limit,
    offset,
    order: [["id", "ASC"]]
  });

  const hasMore = count > offset + invoices.length;

  return {
    invoices,
    count,
    hasMore
  };
};

export default ListInvoicesService;
