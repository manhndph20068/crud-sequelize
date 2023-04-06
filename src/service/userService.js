import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import bluebird from "bluebird";

// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (password) => {
  let hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

const createNewUser = (email, password, username) => {
  let hashPassword = hashUserPassword(password);

  connection.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, hashPassword, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
      console.log(results);
    }
  );
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  let users = [];
  // connection.query("select * from users", function (err, results, fields) {
  //   if (err) {
  //     console.log(err);
  //     return users;
  //   }
  //   users = results;
  //   return users;
  // });
  try {
    const [rows, fields] = await connection.execute("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  createNewUser,
  getUserList,
};
