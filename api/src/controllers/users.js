
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { User } = require('../models/user')
const { validationResult } = require("express-validator")


const login = async (req, res) => {
  const { email, password } = req.body

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ msg: "Usuario o contraseña incorrecto" })
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin, username: user.name },
      process.env.privateKey
    )

    res.setHeader("x-auth-token", token)
    res.setHeader("Access-Control-Expose-Headers", "x-auth-token")
    res.json({ msg: "Usuario logueado", user, token })

}

const register = async (req, res) => {
  const { username, password, isAdmin, ...rest } = req.body

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({ username, password: hashedPassword, email: req.body.email, isAdmin, ...rest })

    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin, username: newUser.name },
      process.env.privateKey
    )

    res.setHeader("x-auth-token", token);
    res.setHeader("Access-Control-Expose-Headers", "x-auth-token")
    res.json({ msg: "Usuario registrado" })

}



module.exports = {
  login,
  register,
  
  
}
