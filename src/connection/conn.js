const mysql = require('mysql');
const db =mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database :process.env.DB
})
db.connect(function(err, conn) {
    if (err) throw err;
    console.log("Connected!");

})
module.exports = db;