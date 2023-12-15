const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Router } = require("express")
const { body, validationResult } = require("express-validator")
const { User } = require("../models/user")

const router = Router();

router.post("/login", [
  body("email").notEmpty(),
  body("password").notEmpty(),
], async (req, res) => {
  const { email, password } = req.body

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ msg: "Usuario o contraseña incorrecto" })
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.privateKey
    )

    res.setHeader("x-auth-token", token)
    res.json({ msg: "Usuario logueado", user, token })
  } catch (error) {
    console.error('Error al iniciar sesión:', error)
    res.status(500).json({ msg: 'Error interno del servidor' })
  }
})

router.post("/register", [
  body("email").custom(async (email) => {
    const user = await User.findOne({ email })

    if (user) throw new Error("Vuelve a intentarlo más tarde")
  }),
  body("name").notEmpty(),
  body("password").notEmpty(),
  body("email").notEmpty(),
  body("direccion").notEmpty(),

], async (req, res) => {
  const { username, password, isAdmin, ...rest } = req.body

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({ username, password: hashedPassword, email: req.body.email, isAdmin, ...rest })

    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.privateKey
    )

    res.setHeader("x-auth-token", token);
    res.json({ msg: "Usuario registrado" })
  } catch (error) {
    console.error('Error al registrar usuario:', error)
    res.status(500).json({ msg: 'Error interno del servidor' })
  }
})

module.exports = router
