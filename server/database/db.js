import mysql from "mysql";

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Xaajimacow3321",
    database:"crud_schema"
})


export default db;