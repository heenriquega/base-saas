import { Sequelize } from "sequelize-typescript";
import User from "../models/User";
import Company from "../models/Company";
import Setting from "../models/Setting";
import Plan from "../models/Plan";


// eslint-disable-next-line
const dbConfig = require("../config/database");
// import dbConfig from "../config/database";

const sequelize = new Sequelize(dbConfig);

const models = [Company, User, Setting, Plan];

sequelize.addModels(models);

export default sequelize;
