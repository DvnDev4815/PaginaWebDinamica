const {createPool} = require("mysql2/promise");

const Pool = createPool({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "12345678",
    database: "ProyectoFinal"
})

module.exports= Pool