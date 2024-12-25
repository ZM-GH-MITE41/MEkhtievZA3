const mysql = require("mysql2");

const db_connection = mysql
    .createConnection({
        host: "127.0.0.1",
        user: "root", 
        database: "MITE41_Mekhtiev", 
        password: "admin", 
    })
    .on("error", (err) => {
        console.log("Failed to connect to Database - ", err);
    });

module.exports = db_connection;
