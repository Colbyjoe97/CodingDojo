const productController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/products", productController.findAllProducts)
    app.get("/api/product/:id", productController.findOneProduct)
    app.post("/api/product/create", productController.createNewProduct)
    app.put("/api/product/update/:id", productController.updateProduct)
    app.delete("/api/product/delete/:id", productController.deleteProduct)
}