
const { requiresAuth } = require('express-openid-connect');


const getprofile = (req, res, next) => {
    console.log(req.oidc.isAuthenticated())
    res.render("profile");
};





module.exports = {
    get: [requiresAuth(),getprofile],
    post: [],
};