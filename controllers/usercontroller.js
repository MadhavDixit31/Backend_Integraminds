const users = require('../modules/usermodules');

exports.getUsers = (req, res) => {
    res.json({
        users,
    });   
}
