// Mysql Dependencies.
let mysql = require("mysql")

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "cupcake_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack)
    return
  }
//   console.log("connected as id " + connection.threadId)
})

// Export connection for our ORM to use.
module.exports = connection