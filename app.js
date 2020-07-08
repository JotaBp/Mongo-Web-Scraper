
const cheerio = require('cheerio'),
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


    })
}

init()