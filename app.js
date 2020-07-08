require('dotenv').config()
require('./configs/mongoose.config')

const cheerio = require('cheerio'),
    mongoose = require('mongoose'),
    Product = require('./models/product.model')
    request = require('request-promise')

async function init() {

    const $ = await request({
        uri: 'https://www.mascotaplanet.com/latas-para-perros/#',
        transform: body => cheerio.load(body)
    })

    const product = $('div.product-container').each((i, el) => {
        
        const productTitle = $(el).find('h2 a.product-name')
    
        const productPrice = $(el).find('div span.price.product-price')
        console.log(i, productTitle.html(), productPrice.text())

        const productsDetails = new Product({
            productName: productTitle.html(),
            productPrice: productPrice.text()
        })

        Product.create(productsDetails)
        .catch(err => {
            console.log(err)
            return next(new Error(err))
        })

        console.log('data saved correctly')

    })
}

init()