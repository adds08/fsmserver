import * as Knex from "knex";
import * as Config from "../knexfile";
import { User } from "../model/interfaces";
// import * as bcrypt from "bcrypt";

// const saltRounds = 10;


const knex = Config.development;

let userList:User[] = [{
    firstname: "Atish",
    lastname: "Shakya",
    dateofbirth: new Date("1994-12-09"),
    email: "atishshakya@gmail.com",
    username: "shakya.atish",
    password: "shakya",
    role_id: 1,
},

{
    firstname: "Ram",
    lastname: "Shakya",
    dateofbirth: new Date("1994-12-09"),
    email: "ram@gmail.com",
    username: "shakya.ram",
    password: "shakya",
    role_id: 2,
},

{
    firstname: "Shyam",
    lastname: "Thapa",
    dateofbirth: new Date("1994-12-09"),
    email: "shyam@gmail.com",
    username: "thapa.shyam",
    password: "thapa",
},
{
    firstname: "demo",
    lastname: "demo",
    dateofbirth: new Date("1994-12-09"),
    email: "demo@gmail.com",
    username: "demo",
    password: "demo",
},

{
    firstname: "demoadmin",
    lastname: "demoadmin",
    dateofbirth: new Date("1994-12-09"),
    email: "demoadmin@gmail.com",
    username: "demoadmin",
    password: "demoadmin",
}
]
export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return await knex("users").del()
        .then(() => {
            // Inserts seed entries
            return knex("users").insert(
                userList
            );
        });
};


