const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  apellido: { type: String, required: true, unique: true },
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

module.exports = {
  User,
}
