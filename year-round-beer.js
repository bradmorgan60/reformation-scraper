const request = require('request')
const cheerio = require('cheerio')
request('https://reformationbrewery.com/beers/jogr/', (error, response, html) => {
    if (!error & response.statusCode == 200) {
        const $ = cheerio.load(html)

        $('.wrapper').each((i, jogr) => {
            const name = $(jogr)
                .find('.beer__mobile-title')
                .text()
                .replace(/\s\s+/g, '')
            const style = $(jogr)
                .find('.beer__style')
                .text()
                .replace(/\s\s+/g,'')
            const ABV = $(jogr)
                .find('.beer__abv')
                .text()
            const description = $(jogr)
                .find('.content, p')
                .text()
                .replace(/\s\s+/g,'')

        console.log(name, description)
        })
    }

})
request('https://reformationbrewery.com/beers/oren-pale-ale/', (error, response, html) => {
    if (!error & response.statusCode == 200) {
        const $ = cheerio.load(html)

        $('.wrapper').each((i, oren) => {
            const name = $(oren)
                .find('.beer__mobile-title')
                .text()
                .replace(/\s\s+/g, '')
            const style = $(oren)
                .find('.beer__style')
                .text()
            const ABV = $(oren)
                .find('.beer__abv')
                .text()
            const description = $(oren)
                .find('.content, p')
                .text()
                .replace(/\s\s+/g,'')
    console.log(name, description)

        })
    }
})



