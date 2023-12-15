const { Router } = require("express")

const { userLoginValidation, userRegisterValidation  } = require("../models/user")

const userController = require('../controllers/users')

const router = Router();

router.post("/login", userLoginValidation, userController.login)
router.post("/register", userRegisterValidation, userController.register)

module.exports = router
