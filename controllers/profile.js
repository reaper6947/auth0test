
const { requiresAuth } = require('express-openid-connect');


const getprofile = (req, res, next) => {
    console.log(req.oidc.user)
    res.render("profile",req.oidc.user);
};





module.exports = {
    get: [requiresAuth(),getprofile],
    post: [],
};