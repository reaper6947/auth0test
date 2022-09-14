
const { requiresAuth } = require('express-openid-connect');


const getprofile = (req, res, next) => {
    res.render("profile",req.oidc.user);
};





module.exports = {
    get: [requiresAuth(),getprofile],
    post: [],
};