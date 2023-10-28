const http = require("http");
const mysql = require("mysql2");
const faker = require("@faker-js/faker").faker;

const PORT = 3000;

const config = {
  host: "mysql",
  user: "root",
  password: "root",
  database: "node-db",
};

const server = http.createServer((req, res) => {
  if (req.url !== "/") return res.end();

  try {
    const fakeName = faker.person.fullName();

    const connection = mysql.createConnection(config);
    connection.query(
      `CREATE TABLE if not exists people (id int not null auto_increment, name varchar(255) not null, primary key(id));`
    );
    connection.query(`INSERT INTO people(name) values('${fakeName}');`);
    connection.query(
      `SELECT * FROM people;`,
      function (error, results, fields) {
        if (error) throw error;

        res.statusCode = 200;
        return res.end(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
          ${results
            .map((person) => `<li>${person.id}: ${person.name}</li>`)
            .join("")}
        </ul>
      `);
      }
    );
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    return res.end("Server error");
  }
});

server.listen(PORT, () => {
  console.log("Server is listening on 3000");
});
