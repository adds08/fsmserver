import * as Knex from "knex";
import * as Config from "../knexfile";

const knex = Config.development;

export async function up(knex: Knex): Promise<any> {
    return await knex.schema
        .createTable('users', function (table) {
            table.increments('id').primary();
            table.string('firstname', 255).notNullable();
            table.string('lastname', 255).notNullable();
            table.string('email',255).notNullable();
            table.string('username',255).notNullable();
            table.dateTime('dateofbirth').notNullable();
            table.string('password',255).notNullable();
            table.integer('role_id').defaultTo(3);
            table.foreign('role_id').references('usersrole.id');
        })
        .createTable('usersrole', function (table) {
            table.increments('id');
            table.string('name', 20).notNullable();
        });
}
export async function down(knex: Knex): Promise<any> {
    return await knex.schema
        .dropTable("usersrole")
        .dropTable("users");
};