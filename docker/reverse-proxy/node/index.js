const http = require("http");
const mysql = require("mysql");
const faker = require("@faker-js/faker").faker;

const config = {
  host: "mysql",
  user: "root",
  password: "root",
  database: "db"
}

const server = http.createServer((req, res) => {
  try {
    const fakeName = faker.name.findName();

    const connection = mysql.createConnection(config)
    connection.query(`CREATE TABLE if not exists people (id int not null auto_increment, name varchar(255) not null, primary key(id))`);
    connection.query(`INSERT INTO people(name) values('${fakeName}')`);
    connection.query(`SELECT * FROM people`, function (error, results, fields) {
      if (error) throw error;

      res.statusCode = 200;
      return res.end(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
          ${results.map(person => (`<li>${person.id}: ${person.name}</li>`)).join("")}
        </ul>
      `)
    });
    connection.end();

    
  } catch {
    console.log(error);
    res.statusCode = 500;
    return res.end("Server error");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on 3000");
})

