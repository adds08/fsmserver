import * as Knex from "knex";
import * as Config from "../knexfile";

const knex = Config.development;

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return await knex("usersrole").del()
        .then(() => {
            // Inserts seed entries
            return knex("usersrole").insert([
                { id: 1, name: "admin" },
                { id: 2, name: "manager" },
                { id: 3, name: "employee" }
            ]);
        });
};
