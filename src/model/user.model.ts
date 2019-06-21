import {knex} from "../database";
import { User } from "./interfaces";

class UserModel{

    private tableName : string = "users";

    create(userdata:User):Promise<any>{
        return knex(this.tableName).insert(userdata);
    }
    findOne(email:string):Promise<any>{
        return knex(this.tableName).select('id', 'role_id', 'username' ,'firstname' ,'lastname').where({
            email,
        });
    }
    auth(email:string,password:string):Promise<any>{
        return knex(this.tableName).select('id', 'role_id', 'username' ,'firstname' ,'lastname').where({
            email,
            password
        });
    }
    findAll():Promise<any>{
        return knex(this.tableName).select('*');
    }
}

export default new UserModel();