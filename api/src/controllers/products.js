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

const getByname = async (req, res) => {
  const { name } = req.params;

  try {
    const product = await Products.findOne({ name: name });

    if (!product) {
      return res.status(404).json({ msg: 'Producto no encontrado' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error al obtener el producto por name:', error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
}

const update = async (req, res) => {
  const { name } = req.params;

  try {
    const product = await Products.findOneAndUpdate(
      { name: name },
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
  const { name } = req.params;

  try {
    const product = await Products.findOneAndDelete({ name: name })

    if (!product) {
      return res.status(404).json({ msg: "Producto no encontrado" })
    }

    res.json(product)
  } catch (error) {
    console.error('Error al borrar el producto:', error)
    res.status(500).json({ msg: 'Error interno del servidor' })
  }
};


const addToWishList = async (req, res) => {
  // const userId = req.params.userId;
  // const productId = req.params.productId;
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }
    let productToWishlist = await Products.findById(req.params._id);

    if (!productToWishlist) {
      return res.status(404).json({ msg: 'Producto no encontrado' });
    }
  //  if (productToWishlist.favs.includes(req.user._id)) {
  //   return res.status(400).send({msg: "Producto ya en wishlist"})
    else {
    const updatedUser = await User.findByIdAndUpdate(req.params._id, { $push: { favs:  req.user._id, } }, { new: true });
    res.json({ msg: 'Producto añadido a la wishlist', user });
   }
    
  } catch (error) {
    console.error('Error al agregar a la wishlist:', error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};


const removeFromWishList = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;

  try {
    
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    const product = await Products.find({productId});

    if (!product) {
      return res.status(404).json({ msg: 'Producto no encontrado' });
    }

    // Verificar si el producto está en la wishlist del usuario
    const isProductInWishlist = user.favs.some(fav => fav.productId.equals(productId));

    if (!isProductInWishlist) {
      return res.json({ msg: 'El producto no está en la wishlist' });
    }

    // Eliminar el producto de la wishlist del usuario
    const updatedUser = await User.findByIdAndUpdate(userId, { $pull: { favs: { productId } } }, { new: true });
    res.json({ msg: 'Producto eliminado de la wishlist', user: updatedUser });
  } catch (error) {
    console.error('Error al eliminar de la wishlist:', error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};




module.exports = {
  create,
  getAll,
  getByname,
  update,
  remove,
  addToWishList,
  removeFromWishList,
}
