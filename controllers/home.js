
const getfunc = (req, res, next) => {
    res.render("home");
};


module.exports = {
    get: [getfunc],
    post: [],
};