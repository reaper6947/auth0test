
const { requiresAuth } = require('express-openid-connect');
const { pool } = require("./db")



const getprofile = async (req, res, next) => {
    let isUser = await userExists(req.oidc.user.email)
    if (isUser === false) {
        await insertUser(req.oidc.user.name,req.oidc.user.email)
    }

    res.render("profile",req.oidc.user);
};
 

async function userExists(email) {
    try {
      const res = await pool.query("SELECT EXISTS(SELECT 1 FROM users where email=$1)",[email]);
        return res.rows[0]["exists"]
    } catch (error) {
      console.error(error);
    }
}

async function insertUser(name,email) {
    try {
        const res = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email]);
      } catch (error) {
        console.error(error);
      }
}
  






module.exports = {
    get: [requiresAuth(),getprofile],
    post: [],
};