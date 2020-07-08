const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema(   {
        productName: String,
        productPrice: String,
    },
    {
    timestamps: true
    }
)

const Product = mongoose.model("Product", productSchema)

module.exports = Product