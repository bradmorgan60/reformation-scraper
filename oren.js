const request = require('request')
const cheerio = require('cheerio')

request('https://reformationbrewery.com/beers/oren-pale-ale/', (error, response, html) => {
    if (!error & response.statusCode == 200) {
        const $ = cheerio.load(html)

        $('.beer').each((i, oren) => {
            const name = $(oren)
                .find('.beer__title')
                .text()
                .replace(/\s\s+/g, '')
            const style = $(oren)
                .find('.beer__style')
                .text()
            const ABV = $(oren)
                .find('beer__abv')
                .text()
            const description = $(oren)
                .find('.content')
                .text()

        console.log(name, style, ABV, description)

        })

    }
})