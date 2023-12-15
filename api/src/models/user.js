const mongoose = require("mongoose")

const { body } = require("express-validator")

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  apellido: { type: String, required: true},
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  direccion: { type: String, required: true},
  isAdmin: Boolean,
  favs: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', default: [] }
    }
  ], 
})

const User = mongoose.model("User", userSchema)

const userLoginValidation = [
  body("email").notEmpty(),
  body("password").notEmpty(),
]

const userRegisterValidation = [
  body("email").custom(async (email) => {
    const user = await User.findOne({ email })

    if (user) throw new Error("Vuelve a intentarlo más tarde")
  }),
  body("name").notEmpty(),
  body("password").notEmpty(),
  body("email").notEmpty(),
  body("direccion").notEmpty(),
]

module.exports = {
  User,
  userRegisterValidation,
  userLoginValidation
}
