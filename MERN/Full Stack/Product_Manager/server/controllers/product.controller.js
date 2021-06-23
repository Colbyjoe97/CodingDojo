const Product = require("../models/product.models")

module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then(allProducts => res.json({result: allProducts}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(oneProduct => res.json({result: oneProduct}))
        .catch(err => res.json(err));
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({result: newProduct}))
        .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.updateOne({_id: req.params.id}, req.body,
        {runValidators: true})
        .then(updatedProduct => res.json({result: updatedProduct}))
        .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}