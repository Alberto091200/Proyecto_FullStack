const {  Products } = require("../models/products")
const { User } = require("../models/user");

const create = async (req, res) => {
  const newProduct = await Products.create(req.body)

  res.json(newProduct)
}

const getAll = async (req, res) => {
  const products = await Products.find()

  res.json(products)
}

const getByNombre = async (req, res) => {
  const { nombre } = req.params;

  try {
    const product = await Products.findOne({ nombre: nombre });

    if (!product) {
      return res.status(404).json({ msg: 'Producto no encontrado' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error al obtener el producto por nombre:', error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
}

const update = async (req, res) => {
  const { nombre } = req.params;

  try {
    const product = await Products.findOneAndUpdate(
      { nombre: nombre },
      req.body,
      { new: true }
    )

    if (!product) {
      return res.status(404).json({ msg: "Producto no encontrado" })
    }

    res.json(product)
  } catch (error) {
    console.error('Error al actualizar el producto:', error)
    res.status(500).json({ msg: 'Error interno del servidor' })
  }
}

const remove = async (req, res) => {
  const { nombre } = req.params;

  try {
    const product = await Products.findOneAndDelete({ nombre: nombre })

    if (!product) {
      return res.status(404).json({ msg: "Producto no encontrado" })
    }

    res.json(product)
  } catch (error) {
    console.error('Error al borrar el producto:', error)
    res.status(500).json({ msg: 'Error interno del servidor' })
  }
};


const toggleWishlist = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    const isProductInWishlist = user.favs.some(fav => fav.productId.equals(productId));

    if (isProductInWishlist) {
      // Si el producto ya está en la wishlist, quitarlo
      user.favs = user.favs.filter(fav => !fav.productId.equals(productId));
      await user.save();
      res.json({ msg: 'Producto eliminado de la wishlist' });
    } else {
      // Si el producto no está en la wishlist, agregarlo
      user.favs.push({ productId });
      await user.save();
      res.json({ msg: 'Producto añadido a la wishlist' });
    }
  } catch (error) {
    console.error('Error al modificar la wishlist:', error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
}

module.exports = {
  create,
  getAll,
  getByNombre,
  update,
  remove,
  toggleWishlist,
}
