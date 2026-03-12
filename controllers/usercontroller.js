const users = require('../models/usermodules');

exports.getUsers = (req, res) => {
    res.json({
        users,
    });
}