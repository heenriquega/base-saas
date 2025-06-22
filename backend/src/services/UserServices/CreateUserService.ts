import * as Yup from "yup";

import AppError from "../../errors/AppError";
import { SerializeUser } from "../../helpers/SerializeUser";
import User from "../../models/User";
import Company from "../../models/Company";

interface Request {
  email: string;
  password: string;
  name: string;
  companyId?: number;
  profile?: string;
}

interface Response {
  email: string;
  name: string;
  id: number;
  profile: string;
}

const CreateUserService = async ({
  email,
  password,
  name,
  companyId,
  profile = "admin"
}: Request): Promise<Response> => {

  const schema = Yup.object().shape({
    name: Yup.string().required().min(2),
    email: Yup.string()
      .email()
      .required()
      .test(
        "Check-email",
        "An user with this email already exists.",
        async value => {
          if (!value) return false;
          const emailExists = await User.findOne({
            where: { email: value }
          });
          return !emailExists;
        }
      ),
    password: Yup.string().required().min(5)
  });

  try {
    await schema.validate({ email, password, name });
  } catch (err) {
    throw new AppError(err.message);
  }

  const user = await User.create({
    email,
    password,
    name,
    companyId,
    profile
  });

  await user.reload();

  const serializedUser = SerializeUser(user);

  return serializedUser;
};

export default CreateUserService;
