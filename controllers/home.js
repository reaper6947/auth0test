const { pool } = require("./db")


const getfunc = async (req, res, next) => {
    let users = await getUserData()
    console.log(users)
    res.render("home", {users});
};



async function getUserData() {
    try {
      const res = await pool.query("SELECT * FROM users");
        return res.rows
    } catch (error) {
      console.error(error);
    }
  }

module.exports = {
    get: [getfunc],
    post: [],
};