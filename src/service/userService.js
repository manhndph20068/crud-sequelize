import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import bluebird from "bluebird";

// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (password) => {
  let hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

const createNewUser = async (email, password, username) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });
  let hashPassword = hashUserPassword(password);

  const [rows, fields] = await connection.execute(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, hashPassword, username]
  );
};

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.log("error", error);
  }
};

const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "DELETE FROM users WHERE id = ? ",
      [id]
    );
    return rows;
  } catch (error) {
    console.log("error", error);
  }
};

const getUserById = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "SELECT * FROM users WHERE id = ? ",
      [id]
    );
    return rows;
  } catch (error) {
    console.log("error", error);
  }
};

const updateUser = async (email, username, id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "UPDATE users SET email = ?, username = ? WHERE id = ?",
      [email, username, id]
    );
    return rows;
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUser,
};
