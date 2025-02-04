
const { userSchema } = require('./Schema.js');

//authentication
module.exports.auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: 'Not authenticated' });
};

//validation
module.exports.validateUser = (req, res, next) => {
    let { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
}