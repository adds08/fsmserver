import * as Knex from "knex";
import * as Config from "../knexfile";

export const knex = Knex(Config["development"]);