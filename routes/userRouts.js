const express = require('express')
const router = express.Router()
const userController = require('../controllers/usercontroller')
router.get('/users', userController.getUsers)
router.post("/users",userController.addUser)

router
    .route("/users")
    .get(userController.getUsers)
    .post(userController.addUser)

router.get('/users/:id', userController.getUsersById)
//router.post('/users', userController.addUser)
module.exports = router
